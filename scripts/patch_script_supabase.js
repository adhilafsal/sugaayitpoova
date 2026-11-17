const fs = require('fs');

const original = fs.readFileSync('script.js', 'utf8');

// Find index of function getUserProfileStore()
const cutIndex = original.indexOf('function getUserProfileStore() {');
if (cutIndex === -1) {
  console.error('Could not find cut index in script.js');
  process.exit(1);
}

const preservedCode = original.slice(0, cutIndex);

const newCode = `
// ==============================================================================
// 5. USER PROFILE, CART & DATABASE SYNC (SUPABASE POWERED)
// ==============================================================================

const profileCache = {
  cart: [],
  savedPackages: [],
  savedCourses: [],
  bookedPackages: [],
  currentCourses: [],
  buyHistory: []
};

let isProfileSyncing = false;

function getUserProfileStore() {
  const user = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (!user) return null;
  const allData = JSON.parse(localStorage.getItem('suggayittProfileData') || '{}');
  if (!allData[user.email]) {
    allData[user.email] = {
      cart: profileCache.cart || [],
      savedPackages: profileCache.savedPackages || [],
      savedCourses: profileCache.savedCourses || [],
      bookedPackages: profileCache.bookedPackages || [],
      currentCourses: profileCache.currentCourses || [],
      buyHistory: profileCache.buyHistory || []
    };
    localStorage.setItem('suggayittProfileData', JSON.stringify(allData));
  }
  return { user, allData, data: allData[user.email] };
}

function saveUserProfileStore(storeObj) {
  if (!storeObj || !storeObj.user) return;
  storeObj.allData[storeObj.user.email] = storeObj.data;
  localStorage.setItem('suggayittProfileData', JSON.stringify(storeObj.allData));
}

async function syncProfileFromSupabase() {
  const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (!activeUser || !window.SuggayittDB) return;
  const userId = activeUser.id;
  if (!userId) return;

  isProfileSyncing = true;
  try {
    const [packages, cart, courses, bookings, orders] = await Promise.all([
      window.SuggayittDB.getSavedPackages(userId),
      window.SuggayittDB.getCartItems(userId),
      window.SuggayittDB.getSavedCourses(userId),
      window.SuggayittDB.getBookingRequests(userId),
      window.SuggayittDB.getOrderRequests(userId)
    ]);

    profileCache.savedPackages = (packages || []).map(p => p.package_id);
    profileCache.cart = (cart || []).map(c => c.product_id);
    profileCache.savedCourses = (courses || []).map(c => c.course_id);

    profileCache.bookedPackages = (bookings || []).map(b => ({
      id: b.id,
      title: b.package_name,
      amount: b.amount || '',
      date: new Date(b.request_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: b.booking_status || 'Requested'
    }));

    profileCache.buyHistory = (orders || []).map(o => ({
      id: o.id,
      title: o.product_name,
      amount: o.amount || '',
      date: new Date(o.order_request_date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      status: o.order_status || 'Requested'
    }));

    const allData = JSON.parse(localStorage.getItem('suggayittProfileData') || '{}');
    allData[activeUser.email] = {
      cart: profileCache.cart,
      savedPackages: profileCache.savedPackages,
      savedCourses: profileCache.savedCourses,
      bookedPackages: profileCache.bookedPackages,
      currentCourses: profileCache.currentCourses,
      buyHistory: profileCache.buyHistory
    };
    localStorage.setItem('suggayittProfileData', JSON.stringify(allData));

    renderPlaces();
    renderPackages();
    renderStore();
    renderStudio();
    if (!profilePageView.classList.contains('hidden')) {
      renderProfileDashboard();
    }
  } catch (err) {
    console.warn('[Supabase Sync Warning]:', err);
  } finally {
    isProfileSyncing = false;
  }
}

async function toggleProfileItem(listKey, itemId, event) {
  if (event) event.stopPropagation();
  const storeObj = getUserProfileStore();
  if (!storeObj) {
    openAuthModal('login');
    return;
  }

  const list = storeObj.data[listKey];
  const idx = list.indexOf(itemId);
  const adding = (idx === -1);
  if (adding) {
    list.push(itemId);
  } else {
    list.splice(idx, 1);
  }
  saveUserProfileStore(storeObj);

  // Sync directly with Supabase
  if (storeObj.user.id && window.SuggayittDB) {
    if (listKey === 'cart') {
      const item = storeItemsData.find(g => g.id === itemId);
      const name = item ? item.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.addToCart(storeObj.user.id, itemId, name, 1);
      } else {
        window.SuggayittDB.removeFromCart(storeObj.user.id, itemId);
      }
    } else if (listKey === 'savedPackages') {
      const pkg = destinationsData.find(d => d.id === itemId);
      const name = pkg ? pkg.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.savePackage(storeObj.user.id, itemId, name);
      } else {
        window.SuggayittDB.removeSavedPackage(storeObj.user.id, itemId);
      }
    } else if (listKey === 'savedCourses') {
      const course = coursesData.find(c => c.id === itemId);
      const name = course ? course.nameEn : itemId;
      if (adding) {
        window.SuggayittDB.saveCourse(storeObj.user.id, itemId, name);
      } else {
        window.SuggayittDB.removeSavedCourse(storeObj.user.id, itemId);
      }
    }
  }

  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }
  if (activeDetailContext && activeDetailContext.type !== 'notfound') {
    openDetailsPage(activeDetailContext.type, activeDetailContext.id);
  }
}

async function recordUserBooking(category, itemTitle, priceOrCost) {
  const storeObj = getUserProfileStore();
  if (!storeObj) return;

  const entry = {
    id: Date.now(),
    title: itemTitle,
    amount: priceOrCost,
    date: new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
    status: 'Requested'
  };

  if (category === 'place') storeObj.data.bookedPackages.unshift(entry);
  else if (category === 'course') storeObj.data.currentCourses.unshift(entry);
  else if (category === 'gear') storeObj.data.buyHistory.unshift(entry);

  saveUserProfileStore(storeObj);

  // Sync request with Supabase
  if (storeObj.user.id && window.SuggayittDB) {
    const itemId = activeDetailContext ? activeDetailContext.id : 'custom';
    if (category === 'place') {
      window.SuggayittDB.createBookingRequest(storeObj.user.id, itemId, itemTitle, priceOrCost);
    } else if (category === 'gear') {
      window.SuggayittDB.createOrderRequest(storeObj.user.id, itemId, itemTitle, 1, priceOrCost);
    } else if (category === 'course') {
      window.SuggayittDB.createBookingRequest(storeObj.user.id, itemId, itemTitle, priceOrCost);
    }
  }

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }
}

function isItemSaved(listKey, itemId) {
  const storeObj = getUserProfileStore();
  return storeObj ? storeObj.data[listKey].includes(itemId) : false;
}

function switchProfileTab(tabName) {
  currentProfileTab = tabName;
  document.querySelectorAll('.profile-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.ptab === tabName);
  });
  renderProfileDashboard();
}

function renderProfileDashboard() {
  const storeObj = getUserProfileStore();
  if (!storeObj) return;

  const { user, data } = storeObj;
  document.getElementById('profileAvatarInitial').textContent = user.name ? user.name.charAt(0).toUpperCase() : 'U';
  document.getElementById('profileUserName').textContent = user.name || 'Traveller';
  const contactText = user.phone ? \`\${user.email} • \${user.phone}\` : user.email;
  document.getElementById('profileUserContact').textContent = contactText;

  const container = document.getElementById('profileTabContent');

  if (isProfileSyncing && !data[currentProfileTab === 'history' ? 'bookedPackages' : (currentProfileTab === 'packages' ? 'savedPackages' : (currentProfileTab === 'courses' ? 'savedCourses' : 'cart'))].length) {
    container.innerHTML = \`
      <div class="profile-loading-box">
        <div class="profile-spinner"></div>
        <p>\${currentLang === 'ml' ? 'വിവരങ്ങൾ ഡാറ്റാബേസിൽ നിന്ന് ലോഡ് ചെയ്യുന്നു...' : 'Syncing data with Supabase...'}</p>
      </div>\`;
    return;
  }

  if (currentProfileTab === 'cart') {
    const items = storeItemsData.filter(g => data.cart.includes(g.id));
    if (!items.length) {
      container.innerHTML = \`<div class="profile-empty-box"><p>\${currentLang === 'ml' ? 'നിങ്ങളുടെ കാർട്ടിൽ ഗിയറുകളൊന്നുമില്ല.' : 'Your gear cart is currently empty. Add items from the Store!'}</p><br><button type="button" class="btn-primary" onclick="openPage('store')">\${currentLang === 'ml' ? 'സ്റ്റോറിലേക്ക് പോകുക' : 'Browse Adventure Store'}</button></div>\`;
      return;
    }
    container.innerHTML = \`<div class="gears-grid">\${items.map(item => \`
      <div class="gear-card">
        <div>
          <img src="\${item.image}" alt="\${item.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">\${currentLang === 'ml' ? item.typeMl : item.typeEn}</span>
            <span class="gear-price">\${item.price}</span>
          </div>
          <h3>\${currentLang === 'ml' ? item.nameMl : item.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <a href="https://wa.me/917012274317?text=Hello%20Suggayitt%20Povaa%2C%20I%20am%20\${encodeURIComponent(user.name)}.%20I%20want%20to%20order%20\${encodeURIComponent(item.nameEn)}." target="_blank" onclick="recordUserBooking('gear', '\${item.nameEn}', '\${item.price}')" class="btn-details">\${currentLang === 'ml' ? 'ഓർഡർ ചെയ്യുക' : 'Buy Now'}</a>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('cart', '\${item.id}', event)">✕</button>
        </div>
      </div>
    \`).join('')}</div>\`;
  } else if (currentProfileTab === 'packages') {
    const places = destinationsData.filter(p => data.savedPackages.includes(p.id));
    if (!places.length) {
      container.innerHTML = \`<div class="profile-empty-box"><p>\${currentLang === 'ml' ? 'സേവ് ചെയ്ത പാക്കേജുകളൊന്നുമില്ല.' : 'No saved packages yet. Save your dream treks to view them here!'}</p><br><button type="button" class="btn-primary" onclick="openPage('packages')">\${currentLang === 'ml' ? 'പാക്കേജുകൾ കാണുക' : 'Explore Packages'}</button></div>\`;
      return;
    }
    container.innerHTML = \`<div class="places-grid">\${places.map(place => \`
      <div class="place-card" onclick="openDetailsPage('place', '\${place.id}')">
        <div>
          <img src="\${place.image}" alt="\${place.nameEn}" class="place-img" onerror="this.style.display='none'">
          <div class="place-region">\${currentLang === 'ml' ? place.regionMl : place.regionEn} • \${place.cost}</div>
          <h3>\${currentLang === 'ml' ? place.nameMl : place.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details">\${currentLang === 'ml' ? 'വിശദാംശങ്ങൾ' : 'More Details'}</button>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('savedPackages', '\${place.id}', event)">✕</button>
        </div>
      </div>
    \`).join('')}</div>\`;
  } else if (currentProfileTab === 'courses') {
    const courses = coursesData.filter(c => data.savedCourses.includes(c.id));
    if (!courses.length) {
      container.innerHTML = \`<div class="profile-empty-box"><p>\${currentLang === 'ml' ? 'സേവ് ചെയ്ത കോഴ്സുകളൊന്നുമില്ല.' : 'No saved courses yet. Save courses from Featured Editing & Shooting!'}</p><br><button type="button" class="btn-primary" onclick="openPage('studio')">\${currentLang === 'ml' ? 'കോഴ്സുകൾ കാണുക' : 'Explore Courses'}</button></div>\`;
      return;
    }
    container.innerHTML = \`<div class="gears-grid">\${courses.map(c => \`
      <div class="gear-card">
        <div>
          <img src="\${c.image}" alt="\${c.nameEn}" class="gear-img" onerror="this.style.display='none'">
          <div class="gear-top">
            <span class="gear-type">\${currentLang === 'ml' ? c.typeMl : c.typeEn}</span>
            <span class="gear-price">\${c.price}</span>
          </div>
          <h3>\${currentLang === 'ml' ? c.nameMl : c.nameEn}</h3>
        </div>
        <div class="card-btn-row">
          <button type="button" class="btn-details" onclick="openDetailsPage('course', '\${c.id}')">\${currentLang === 'ml' ? 'വിശദാംശങ്ങൾ' : 'More Details'}</button>
          <button type="button" class="btn-remove-small" onclick="toggleProfileItem('savedCourses', '\${c.id}', event)">✕</button>
        </div>
      </div>
    \`).join('')}</div>\`;
  } else if (currentProfileTab === 'history') {
    const renderRows = (arr, emptyText) => arr.length
      ? arr.map(r => \`<div class="history-row"><div><strong>\${r.title}</strong><div style="font-size:0.82rem;color:#cbd5e1;">\${r.date} • \${r.amount}</div></div><span class="history-badge \${r.status === 'Requested' ? 'requested' : 'confirmed'}">\${r.status}</span></div>\`).join('')
      : \`<p style="color:#94a3b8;font-size:0.9rem;margin-bottom:1rem;">\${emptyText}</p>\`;

    container.innerHTML = \`
      <div class="history-section-group">
        <h3>\${currentLang === 'ml' ? 'നിലവിലുള്ള കോഴ്സുകൾ (Current Courses)' : 'Current Courses'}</h3>
        \${renderRows(data.currentCourses, currentLang === 'ml' ? 'നിലവിൽ കോഴ്സുകളിലൊന്നും ചേർന്നിട്ടില്ല.' : 'No active courses enrolled yet.')}
      </div>
      <div class="history-section-group">
        <h3>\${currentLang === 'ml' ? 'ബുക്ക് ചെയ്ത പാക്കേജുകൾ (Booked / Requested Packages)' : 'Booked & Requested Packages'}</h3>
        \${renderRows(data.bookedPackages, currentLang === 'ml' ? 'ബുക്ക് ചെയ്ത പാക്കേജുകളൊന്നുമില്ല.' : 'No package requests recorded yet.')}
      </div>
      <div class="history-section-group">
        <h3>\${currentLang === 'ml' ? 'വാങ്ങിയ ഗിയറുകൾ (Buy History / Gear Orders)' : 'Buy History & Order Requests'}</h3>
        \${renderRows(data.buyHistory, currentLang === 'ml' ? 'ഇതുവരെ ഗിയറുകളൊന്നും വാങ്ങിയിട്ടില്ല.' : 'No gear order requests recorded yet.')}
      </div>
    \`;
  }
}

// ==============================================================================
// 6. LOG IN & SIGN UP ENGINE (SUPABASE AUTH POWERED)
// ==============================================================================

function openAuthModal(tab = 'login') {
  authModal.classList.remove('hidden');
  switchAuthTab(tab);
}

function closeAuthModal() {
  authModal.classList.add('hidden');
  authFeedbackMsg.classList.add('hidden');
}

function closeAuthOnBackdrop(event) {
  if (event.target === authModal) {
    closeAuthModal();
  }
}

function switchAuthTab(tab) {
  authFeedbackMsg.classList.add('hidden');
  const loginF = document.getElementById('loginForm');
  const signupF = document.getElementById('signupForm');
  const forgotF = document.getElementById('forgotForm');
  const updateF = document.getElementById('updatePasswordForm');
  const tabLogin = document.getElementById('tabLoginBtn');
  const tabSignup = document.getElementById('tabSignupBtn');

  if (loginF) loginF.classList.add('hidden');
  if (signupF) signupF.classList.add('hidden');
  if (forgotF) forgotF.classList.add('hidden');
  if (updateF) updateF.classList.add('hidden');
  if (tabLogin) tabLogin.classList.remove('active');
  if (tabSignup) tabSignup.classList.remove('active');

  if (tab === 'signup') {
    if (signupF) signupF.classList.remove('hidden');
    if (tabSignup) tabSignup.classList.add('active');
  } else if (tab === 'forgot') {
    if (forgotF) forgotF.classList.remove('hidden');
  } else if (tab === 'update-password') {
    if (updateF) updateF.classList.remove('hidden');
  } else {
    if (loginF) loginF.classList.remove('hidden');
    if (tabLogin) tabLogin.classList.add('active');
  }
}

function showAuthFeedback(message, type) {
  authFeedbackMsg.textContent = message;
  authFeedbackMsg.className = \`auth-feedback \${type}\`;
  authFeedbackMsg.classList.remove('hidden');
}

async function handleSignupSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const phone = document.getElementById('signupPhone').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'അക്കൗണ്ട് സൃഷ്ടിക്കുന്നു...' : 'Creating your account...',
    'info'
  );

  if (window.SuggayittDB) {
    const { data, error } = await window.SuggayittDB.signUp(email, password, name, phone);
    if (error) {
      showAuthFeedback(error.message || 'Signup failed', 'error');
      return;
    }

    if (data && data.user) {
      if (data.session) {
        // Immediate session created
        const activeUser = {
          id: data.user.id,
          name: name,
          phone: phone,
          email: email
        };
        localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
        updateAuthNavbar();
        syncProfileFromSupabase();

        // Safe legacy data migration
        window.SuggayittDB.migrateLegacyData(activeUser.id, activeUser.email, destinationsData, storeItemsData, coursesData);

        showAuthFeedback(
          currentLang === 'ml'
            ? \`സ്വാഗതം \${name}! അക്കൗണ്ട് വിജയകരമായി നിർമ്മിച്ചു.\`
            : \`Welcome \${name}! Your account has been created.\`,
          'success'
        );
        document.getElementById('signupForm').reset();
        setTimeout(closeAuthModal, 1200);
      } else {
        // Email verification required
        showAuthFeedback(
          currentLang === 'ml'
            ? \`അക്കൗണ്ട് സൃഷ്ടിച്ചു! ദയവായി നിങ്ങളുടെ ഇമെയിൽ പരിശോധിച്ചു സ്ഥിരീകരിക്കുക (\${email}).\`
            : \`Account created! Please check your email inbox to verify your account (\${email}).\`,
          'success'
        );
        document.getElementById('signupForm').reset();
      }
      return;
    }
  }

  showAuthFeedback('Unable to connect to database. Please check your internet connection.', 'error');
}

async function handleLoginSubmit(event) {
  event.preventDefault();
  const identifier = document.getElementById('loginIdentifier').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'പരിശോധിക്കുന്നു...' : 'Logging in...',
    'info'
  );

  if (window.SuggayittDB) {
    const { data, error } = await window.SuggayittDB.signIn(identifier, password);
    if (error) {
      let msg = error.message;
      if (error.message.includes('Invalid login credentials')) {
        msg = currentLang === 'ml'
          ? 'തെറ്റായ ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ്.'
          : 'Invalid email or password.';
      } else if (error.message.includes('Email not confirmed')) {
        msg = currentLang === 'ml'
          ? 'ഇമെയിൽ സ്ഥിരീകരിച്ചിട്ടില്ല. ദയവായി നിങ്ങളുടെ ഇൻബോക്സ് പരിശോധിക്കുക.'
          : 'Email not confirmed yet. Please verify your email via the link sent to you.';
      }
      showAuthFeedback(msg, 'error');
      return;
    }

    if (data && data.session && data.user) {
      const u = data.user;
      let userName = u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0];
      let userPhone = u.user_metadata?.phone || '';

      // Try fetching profile from profiles table
      try {
        const profile = await window.SuggayittDB.getProfile(u.id);
        if (profile) {
          if (profile.full_name) userName = profile.full_name;
          if (profile.phone) userPhone = profile.phone;
        }
      } catch (e) { }

      const activeUser = {
        id: u.id,
        name: userName,
        phone: userPhone,
        email: u.email
      };

      localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
      updateAuthNavbar();
      syncProfileFromSupabase();

      // Safe legacy data migration
      window.SuggayittDB.migrateLegacyData(activeUser.id, activeUser.email, destinationsData, storeItemsData, coursesData);

      showAuthFeedback(
        currentLang === 'ml'
          ? \`തിരികെ സ്വാഗതം, \${userName}!\`
          : \`Welcome back, \${userName}!\`,
        'success'
      );

      document.getElementById('loginForm').reset();
      renderPlaces();
      renderPackages();
      renderStore();
      renderStudio();
      setTimeout(closeAuthModal, 850);
      return;
    }
  }

  showAuthFeedback('Unable to connect to database. Please check your internet connection.', 'error');
}

async function logoutUser() {
  if (window.SuggayittDB) {
    try {
      await window.SuggayittDB.signOut();
    } catch (e) {
      console.warn('SignOut warning:', e);
    }
  }

  localStorage.removeItem('suggayittActiveUser');
  profileCache.cart = [];
  profileCache.savedPackages = [];
  profileCache.savedCourses = [];
  profileCache.bookedPackages = [];
  profileCache.buyHistory = [];

  updateAuthNavbar();
  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();
  if (!profilePageView.classList.contains('hidden')) {
    showMainView('home');
  }
}

async function handleForgotPasswordSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('forgotEmail').value.trim().toLowerCase();

  showAuthFeedback(
    currentLang === 'ml' ? 'ലിങ്ക് അയക്കുന്നു...' : 'Sending reset link...',
    'info'
  );

  if (window.SuggayittDB) {
    const { error } = await window.SuggayittDB.resetPasswordForEmail(email);
    if (error) {
      showAuthFeedback(error.message, 'error');
      return;
    }

    showAuthFeedback(
      currentLang === 'ml'
        ? 'പാസ്‌വേഡ് റീസെറ്റ് ലിങ്ക് നിങ്ങളുടെ ഇമെയിലിലേക്ക് അയച്ചിട്ടുണ്ട്!'
        : 'Password reset link has been sent to your email!',
      'success'
    );
    document.getElementById('forgotForm').reset();
  }
}

async function handleUpdatePasswordSubmit(event) {
  event.preventDefault();
  const newPassword = document.getElementById('newPasswordInput').value;

  showAuthFeedback(
    currentLang === 'ml' ? 'പാസ്‌വേഡ് മാറ്റുന്നു...' : 'Updating password...',
    'info'
  );

  if (window.SuggayittDB) {
    const { error } = await window.SuggayittDB.updatePassword(newPassword);
    if (error) {
      showAuthFeedback(error.message, 'error');
      return;
    }

    showAuthFeedback(
      currentLang === 'ml'
        ? 'പാസ്‌വേഡ് വിജയകരമായി അപ്‌ഡേറ്റ് ചെയ്തു! ഇനി ലോഗിൻ ചെയ്യാം.'
        : 'Password updated successfully! You can now log in.',
      'success'
    );
    document.getElementById('updatePasswordForm').reset();
    setTimeout(() => {
      switchAuthTab('login');
    }, 1500);
  }
}

function updateAuthNavbar() {
  const activeUser = JSON.parse(localStorage.getItem('suggayittActiveUser') || 'null');
  if (activeUser) {
    authNavGroup.classList.add('hidden');
    userProfileGroup.classList.remove('hidden');
    const firstName = activeUser.name ? activeUser.name.split(' ')[0] : 'Profile';
    loggedInUserBadge.textContent = \`👤 \${firstName} (Profile)\`;
  } else {
    userProfileGroup.classList.add('hidden');
    authNavGroup.classList.remove('hidden');
  }
}

// ==============================================================================
// 7. LANGUAGE SWITCHER & INITIALIZATION
// ==============================================================================

function applyLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-en], [data-ml]').forEach(el => {
    el.textContent = lang === 'ml' ? el.getAttribute('data-ml') : el.getAttribute('data-en');
  });

  if (typeof placeSearchInput !== 'undefined' && placeSearchInput) {
    placeSearchInput.placeholder = lang === 'ml'
      ? placeSearchInput.getAttribute('data-placeholder-ml')
      : placeSearchInput.getAttribute('data-placeholder-en');
  }

  if (typeof suggestionInput !== 'undefined' && suggestionInput) {
    suggestionInput.placeholder = lang === 'ml'
      ? suggestionInput.getAttribute('data-placeholder-ml')
      : suggestionInput.getAttribute('data-placeholder-en');
  }

  document.querySelectorAll('#authModal input[data-placeholder-en]').forEach(inp => {
    inp.placeholder = lang === 'ml'
      ? inp.getAttribute('data-placeholder-ml')
      : inp.getAttribute('data-placeholder-en');
  });

  renderPlaces();
  renderPackages();
  renderStore();
  renderStudio();
  renderDiscover();
  renderTrivia();
  updateAuthNavbar();

  if (!profilePageView.classList.contains('hidden')) {
    renderProfileDashboard();
  }

  if (activeDetailContext) {
    if (activeDetailContext.type === 'notfound') {
      openNotFoundPage(activeDetailContext.id);
    } else {
      openDetailsPage(activeDetailContext.type, activeDetailContext.id);
    }
  }

  localStorage.setItem('suggayittLang', lang);
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderPackages();
  });
});

if (typeof langSelect !== 'undefined' && langSelect) {
  langSelect.addEventListener('change', (e) => {
    applyLanguage(e.target.value);
  });
}

async function syncCatalogFromAPI() {
  try {
    const [destRes, storeRes, courseRes, knowRes] = await Promise.all([
      fetch('/api/destinations'),
      fetch('/api/store'),
      fetch('/api/courses'),
      fetch('/api/knowledge')
    ]);

    const destData = await destRes.json();
    if (destData && destData.success && destData.destinations) {
      destinationsData.splice(0, destinationsData.length, ...destData.destinations);
    }
    const storeData = await storeRes.json();
    if (storeData && storeData.success && storeData.items) {
      storeItemsData.splice(0, storeItemsData.length, ...storeData.items);
    }
    const courseData = await courseRes.json();
    if (courseData && courseData.success && courseData.courses) {
      coursesData.splice(0, coursesData.length, ...courseData.courses);
    }
    const knowData = await knowRes.json();
    if (knowData && knowData.success && knowData.knowledge) {
      knowledgeData.splice(0, knowledgeData.length, ...knowData.knowledge);
    }

    populateSearchDatalist();
    renderPlaces();
    renderPackages();
    renderStore();
    renderStudio();
  } catch (err) {
    // Static catalogs remain default
  }
}

async function validateSession() {
  if (!window.SuggayittDB) return;

  try {
    const session = await window.SuggayittDB.getCurrentSession();
    if (session && session.user) {
      const u = session.user;
      let userName = u.user_metadata?.full_name || u.user_metadata?.name || u.email.split('@')[0];
      let userPhone = u.user_metadata?.phone || '';

      try {
        const profile = await window.SuggayittDB.getProfile(u.id);
        if (profile) {
          if (profile.full_name) userName = profile.full_name;
          if (profile.phone) userPhone = profile.phone;
        }
      } catch (e) { }

      const activeUser = {
        id: u.id,
        name: userName,
        phone: userPhone,
        email: u.email
      };

      localStorage.setItem('suggayittActiveUser', JSON.stringify(activeUser));
      updateAuthNavbar();
      syncProfileFromSupabase();
    } else {
      const cached = localStorage.getItem('suggayittActiveUser');
      if (cached) {
        localStorage.removeItem('suggayittActiveUser');
        updateAuthNavbar();
      }
    }
  } catch (err) {
    console.warn('[Session validation notice]:', err);
  }
}

function handleHashRouting() {
  const hash = (window.location.hash || '').replace('#', '');
  if (!hash) return;

  // Handle password recovery link from Supabase
  if (window.location.href.includes('type=recovery') || hash.includes('type=recovery')) {
    openAuthModal('update-password');
    return;
  }

  if (hash === 'home') {
    showMainView('home');
  } else if (hash === 'best-places') {
    showMainView('best-places');
  } else if (hash === 'about') {
    showMainView('about');
  } else if (hash === 'packages') {
    openPage('packages');
  } else if (hash === 'store') {
    openPage('store');
  } else if (hash === 'studio') {
    openPage('studio');
  } else if (hash === 'discover') {
    openPage('discover');
  } else if (hash === 'profile') {
    openPage('profile');
  }
}

window.addEventListener('popstate', handleHashRouting);
window.addEventListener('hashchange', handleHashRouting);

window.addEventListener('DOMContentLoaded', () => {
  populateSearchDatalist();
  const saved = localStorage.getItem('suggayittLang') || 'en';
  if (typeof langSelect !== 'undefined' && langSelect) {
    langSelect.value = saved;
  }
  applyLanguage(saved);
  syncCatalogFromAPI();

  // Initialize Supabase session and listener
  if (window.SuggayittDB) {
    validateSession();
    window.SuggayittDB.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') {
        openAuthModal('update-password');
      } else if (event === 'SIGNED_IN') {
        validateSession();
      } else if (event === 'SIGNED_OUT') {
        logoutUser();
      }
    });
  }

  if (window.location.hash || window.location.href.includes('type=recovery')) {
    handleHashRouting();
  }
});
`;

fs.writeFileSync('script.js', preservedCode + newCode, 'utf8');
console.log('Successfully patched script.js with Supabase backend!');
