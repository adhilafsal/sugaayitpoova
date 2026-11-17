// ==============================================================================
// SUGGAYITT POVAA - SUPABASE DATABASE & AUTH SERVICE LAYER
// ==============================================================================

const SuggayittDB = {
  getClient() {
    if (typeof window !== 'undefined') {
      if (window.supabaseClient) return window.supabaseClient;
      if (typeof window.getSupabaseClient === 'function') {
        window.supabaseClient = window.getSupabaseClient();
        return window.supabaseClient;
      }
    }
    return null;
  },

  // ============================================================================
  // 1. AUTHENTICATION OPERATIONS
  // ============================================================================
  async signUp(email, password, fullName, phone) {
    const sb = this.getClient();
    if (!sb) return { error: { message: 'Database client unavailable' } };

    try {
      const { data, error } = await sb.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            phone: phone || ''
          }
        }
      });
      return { data, error };
    } catch (err) {
      console.error('[SupabaseDB] signUp error:', err);
      return { error: err };
    }
  },

  async signIn(email, password) {
    const sb = this.getClient();
    if (!sb) return { error: { message: 'Database client unavailable' } };

    try {
      const { data, error } = await sb.auth.signInWithPassword({
        email,
        password
      });
      return { data, error };
    } catch (err) {
      console.error('[SupabaseDB] signIn error:', err);
      return { error: err };
    }
  },

  async signOut() {
    const sb = this.getClient();
    if (!sb) return { error: null };

    try {
      const { error } = await sb.auth.signOut();
      return { error };
    } catch (err) {
      console.error('[SupabaseDB] signOut error:', err);
      return { error: err };
    }
  },

  async resetPasswordForEmail(email) {
    const sb = this.getClient();
    if (!sb) return { error: { message: 'Database client unavailable' } };

    try {
      const redirectUrl = window.location.origin + window.location.pathname;
      const { data, error } = await sb.auth.resetPasswordForEmail(email, {
        redirectTo: redirectUrl
      });
      return { data, error };
    } catch (err) {
      console.error('[SupabaseDB] resetPassword error:', err);
      return { error: err };
    }
  },

  async updatePassword(newPassword) {
    const sb = this.getClient();
    if (!sb) return { error: { message: 'Database client unavailable' } };

    try {
      const { data, error } = await sb.auth.updateUser({
        password: newPassword
      });
      return { data, error };
    } catch (err) {
      console.error('[SupabaseDB] updatePassword error:', err);
      return { error: err };
    }
  },

  async getCurrentSession() {
    const sb = this.getClient();
    if (!sb) return null;

    try {
      const { data: { session } } = await sb.auth.getSession();
      return session;
    } catch (err) {
      console.warn('[SupabaseDB] getSession error:', err);
      return null;
    }
  },

  onAuthStateChange(callback) {
    const sb = this.getClient();
    if (!sb) return { data: { subscription: { unsubscribe: () => {} } } };
    return sb.auth.onAuthStateChange(callback);
  },

  // ============================================================================
  // 2. USER PROFILE OPERATIONS
  // ============================================================================
  async getProfile(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return null;

    try {
      const { data, error } = await sb
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle();

      if (error) {
        console.warn('[SupabaseDB] getProfile warning:', error);
        return null;
      }
      return data;
    } catch (err) {
      console.error('[SupabaseDB] getProfile error:', err);
      return null;
    }
  },

  async updateProfile(userId, updates) {
    const sb = this.getClient();
    if (!sb || !userId) return { error: 'No client or userId' };

    try {
      const { data, error } = await sb
        .from('profiles')
        .update({
          full_name: updates.full_name,
          phone: updates.phone,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single();

      return { data, error };
    } catch (err) {
      return { error: err };
    }
  },

  // ============================================================================
  // 3. SAVED PACKAGES OPERATIONS
  // ============================================================================
  async getSavedPackages(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('saved_packages')
        .select('*')
        .eq('user_id', userId)
        .order('saved_date', { ascending: false });

      if (error) {
        console.warn('[SupabaseDB] getSavedPackages:', error);
        return [];
      }
      return data || [];
    } catch (err) {
      console.error('[SupabaseDB] getSavedPackages error:', err);
      return [];
    }
  },

  async savePackage(userId, packageId, packageName) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('saved_packages')
        .insert([{
          user_id: userId,
          package_id: packageId,
          package_name: packageName
        }]);

      if (error && error.code !== '23505') { // 23505 = unique_violation
        console.error('[SupabaseDB] savePackage error:', error);
        return false;
      }

      this.logActivity(userId, 'package_saved', packageId, packageName);
      return true;
    } catch (err) {
      console.error('[SupabaseDB] savePackage error:', err);
      return false;
    }
  },

  async removeSavedPackage(userId, packageId) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('saved_packages')
        .delete()
        .eq('user_id', userId)
        .eq('package_id', packageId);

      if (error) {
        console.error('[SupabaseDB] removeSavedPackage error:', error);
        return false;
      }

      this.logActivity(userId, 'package_removed', packageId, '');
      return true;
    } catch (err) {
      console.error('[SupabaseDB] removeSavedPackage error:', err);
      return false;
    }
  },

  // ============================================================================
  // 4. CART ITEMS OPERATIONS
  // ============================================================================
  async getCartItems(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('cart_items')
        .select('*')
        .eq('user_id', userId)
        .order('added_date', { ascending: false });

      if (error) {
        console.warn('[SupabaseDB] getCartItems:', error);
        return [];
      }
      return data || [];
    } catch (err) {
      console.error('[SupabaseDB] getCartItems error:', err);
      return [];
    }
  },

  async addToCart(userId, productId, productName, quantity = 1) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('cart_items')
        .upsert({
          user_id: userId,
          product_id: productId,
          product_name: productName,
          quantity: quantity,
          updated_date: new Date().toISOString()
        }, { onConflict: 'user_id,product_id' });

      if (error) {
        console.error('[SupabaseDB] addToCart error:', error);
        return false;
      }

      this.logActivity(userId, 'product_added_to_cart', productId, productName, { quantity });
      return true;
    } catch (err) {
      console.error('[SupabaseDB] addToCart error:', err);
      return false;
    }
  },

  async removeFromCart(userId, productId) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
        .eq('product_id', productId);

      if (error) {
        console.error('[SupabaseDB] removeFromCart error:', error);
        return false;
      }

      this.logActivity(userId, 'product_removed_from_cart', productId, '');
      return true;
    } catch (err) {
      console.error('[SupabaseDB] removeFromCart error:', err);
      return false;
    }
  },

  // ============================================================================
  // 5. SAVED COURSES OPERATIONS
  // ============================================================================
  async getSavedCourses(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('saved_courses')
        .select('*')
        .eq('user_id', userId)
        .order('saved_date', { ascending: false });

      if (error) {
        console.warn('[SupabaseDB] getSavedCourses:', error);
        return [];
      }
      return data || [];
    } catch (err) {
      console.error('[SupabaseDB] getSavedCourses error:', err);
      return [];
    }
  },

  async saveCourse(userId, courseId, courseName) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('saved_courses')
        .insert([{
          user_id: userId,
          course_id: courseId,
          course_name: courseName
        }]);

      if (error && error.code !== '23505') {
        console.error('[SupabaseDB] saveCourse error:', error);
        return false;
      }

      this.logActivity(userId, 'course_saved', courseId, courseName);
      return true;
    } catch (err) {
      console.error('[SupabaseDB] saveCourse error:', err);
      return false;
    }
  },

  async removeSavedCourse(userId, courseId) {
    const sb = this.getClient();
    if (!sb || !userId) return false;

    try {
      const { error } = await sb
        .from('saved_courses')
        .delete()
        .eq('user_id', userId)
        .eq('course_id', courseId);

      if (error) {
        console.error('[SupabaseDB] removeSavedCourse error:', error);
        return false;
      }

      this.logActivity(userId, 'course_removed', courseId, '');
      return true;
    } catch (err) {
      console.error('[SupabaseDB] removeSavedCourse error:', err);
      return false;
    }
  },

  // ============================================================================
  // 6. BOOKING & ORDER REQUESTS (WHATSAPP INQUIRY FLOW)
  // ============================================================================
  async createBookingRequest(userId, packageId, packageName, amount) {
    const sb = this.getClient();
    if (!sb || !userId) return null;

    try {
      const { data, error } = await sb
        .from('booking_requests')
        .insert([{
          user_id: userId,
          package_id: packageId,
          package_name: packageName,
          amount: amount,
          booking_status: 'Requested'
        }])
        .select()
        .single();

      if (error) {
        console.error('[SupabaseDB] createBookingRequest error:', error);
        return null;
      }

      this.logActivity(userId, 'booking_request_submitted', packageId, packageName, { amount, status: 'Requested' });
      return data;
    } catch (err) {
      console.error('[SupabaseDB] createBookingRequest error:', err);
      return null;
    }
  },

  async getBookingRequests(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('booking_requests')
        .select('*')
        .eq('user_id', userId)
        .order('request_date', { ascending: false });

      if (error) {
        console.warn('[SupabaseDB] getBookingRequests:', error);
        return [];
      }
      return data || [];
    } catch (err) {
      console.error('[SupabaseDB] getBookingRequests error:', err);
      return [];
    }
  },

  async createOrderRequest(userId, productId, productName, quantity, amount) {
    const sb = this.getClient();
    if (!sb || !userId) return null;

    try {
      const { data, error } = await sb
        .from('order_requests')
        .insert([{
          user_id: userId,
          product_id: productId,
          product_name: productName,
          quantity: quantity || 1,
          amount: amount,
          order_status: 'Requested'
        }])
        .select()
        .single();

      if (error) {
        console.error('[SupabaseDB] createOrderRequest error:', error);
        return null;
      }

      this.logActivity(userId, 'order_request_submitted', productId, productName, { quantity, amount, status: 'Requested' });
      return data;
    } catch (err) {
      console.error('[SupabaseDB] createOrderRequest error:', err);
      return null;
    }
  },

  async getOrderRequests(userId) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('order_requests')
        .select('*')
        .eq('user_id', userId)
        .order('order_request_date', { ascending: false });

      if (error) {
        console.warn('[SupabaseDB] getOrderRequests:', error);
        return [];
      }
      return data || [];
    } catch (err) {
      console.error('[SupabaseDB] getOrderRequests error:', err);
      return [];
    }
  },

  // ============================================================================
  // 7. USER ACTIVITY OPERATIONS
  // ============================================================================
  async logActivity(userId, activityType, itemId, itemName, details) {
    const sb = this.getClient();
    if (!sb || !userId) return;

    try {
      await sb
        .from('user_activity')
        .insert([{
          user_id: userId,
          activity_type: activityType,
          item_id: itemId || null,
          item_name: itemName || null,
          details: details || {}
        }]);
    } catch (err) {
      console.warn('[SupabaseDB] logActivity notice:', err);
    }
  },

  async getUserActivities(userId, limit) {
    const sb = this.getClient();
    if (!sb || !userId) return [];

    try {
      const { data, error } = await sb
        .from('user_activity')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit || 20);

      if (error) return [];
      return data || [];
    } catch (err) {
      return [];
    }
  },

  // ============================================================================
  // 8. LOCALSTORAGE TO SUPABASE MIGRATION
  // ============================================================================
  detectLegacyData(userEmail) {
    try {
      const profileData = JSON.parse(localStorage.getItem('suggayittProfileData') || '{}');
      const legacyUser = profileData[userEmail] || profileData[userEmail.toLowerCase()];
      if (!legacyUser) return null;

      const hasCart = Array.isArray(legacyUser.cart) && legacyUser.cart.length > 0;
      const hasPackages = Array.isArray(legacyUser.savedPackages) && legacyUser.savedPackages.length > 0;
      const hasCourses = Array.isArray(legacyUser.savedCourses) && legacyUser.savedCourses.length > 0;

      if (hasCart || hasPackages || hasCourses) {
        return legacyUser;
      }
      return null;
    } catch (err) {
      return null;
    }
  },

  async migrateLegacyData(userId, userEmail, destinationsCatalog, storeCatalog, coursesCatalog) {
    const legacy = this.detectLegacyData(userEmail);
    if (!legacy) return { migrated: false, reason: 'No legacy data found' };

    const migrationKey = 'suggayitt_migrated_' + userId;
    const migrationMarker = localStorage.getItem(migrationKey);
    if (migrationMarker) {
      return { migrated: false, reason: 'Already migrated' };
    }

    try {
      const backupKey = 'suggayitt_backup_' + Date.now();
      localStorage.setItem(backupKey, JSON.stringify(legacy));
      console.log('[SupabaseDB] Created safety backup at ' + backupKey);
    } catch (e) {
      console.warn('[SupabaseDB] Safety backup notice:', e);
    }

    let cartCount = 0;
    let packageCount = 0;
    let courseCount = 0;

    const dests = destinationsCatalog || [];
    const stores = storeCatalog || [];
    const courses = coursesCatalog || [];

    // 1. Migrate saved packages
    if (Array.isArray(legacy.savedPackages)) {
      for (const pkgId of legacy.savedPackages) {
        const item = dests.find(d => d.id === pkgId);
        const name = item ? item.nameEn : pkgId;
        const ok = await this.savePackage(userId, pkgId, name);
        if (ok) packageCount++;
      }
    }

    // 2. Migrate cart items
    if (Array.isArray(legacy.cart)) {
      for (const prodId of legacy.cart) {
        const item = stores.find(s => s.id === prodId);
        const name = item ? item.nameEn : prodId;
        const ok = await this.addToCart(userId, prodId, name, 1);
        if (ok) cartCount++;
      }
    }

    // 3. Migrate saved courses
    if (Array.isArray(legacy.savedCourses)) {
      for (const courseId of legacy.savedCourses) {
        const item = courses.find(c => c.id === courseId);
        const name = item ? item.nameEn : courseId;
        const ok = await this.saveCourse(userId, courseId, name);
        if (ok) courseCount++;
      }
    }

    localStorage.setItem(migrationKey, JSON.stringify({
      date: new Date().toISOString(),
      packages: packageCount,
      cart: cartCount,
      courses: courseCount
    }));

    console.log('[SupabaseDB] Migration completed: ' + packageCount + ' packages, ' + cartCount + ' cart items, ' + courseCount + ' courses.');
    return {
      migrated: true,
      packages: packageCount,
      cart: cartCount,
      courses: courseCount
    };
  }
};

if (typeof window !== 'undefined') {
  window.SuggayittDB = SuggayittDB;
}
