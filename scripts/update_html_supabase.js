const fs = require('fs');

let html = fs.readFileSync('suggayitt povaa.html', 'utf8');

// 1. Add scripts before imageMapping.js
const scriptPlaceholder = '<script src="imageMapping.js"></script>';
const newScripts = '  <!-- Supabase Official JS SDK & Client -->\n  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>\n  <script src="supabase-config.js"></script>\n  <script src="supabase-db.js"></script>\n  <script src="imageMapping.js"></script>';

if (!html.includes('supabase-config.js')) {
  html = html.replace(scriptPlaceholder, newScripts);
}

// 2. Add 'Forgot password?' link to loginForm
if (!html.includes('auth-forgot-link')) {
  const passInputRegex = /(<input[^>]*id="loginPassword"[^>]*>)/i;
  const forgotLink = '\n        <div style="display:flex; justify-content:flex-end; margin-top:-0.4rem; margin-bottom:0.9rem;">\n          <a href="#" onclick="switchAuthTab(\'forgot\'); return false;" class="auth-forgot-link" data-en="Forgot password?" data-ml="പാസ്‌വേഡ് മറന്നുപോയോ?">Forgot password?</a>\n        </div>';
  html = html.replace(passInputRegex, '$1' + forgotLink);
}

// 3. Add forgotForm and updatePasswordForm after signupForm
if (!html.includes('id="forgotForm"')) {
  const additionalForms = `
      <!-- FORGOT PASSWORD FORM -->
      <form id="forgotForm" class="auth-form hidden" onsubmit="handleForgotPasswordSubmit(event)">
        <h3 data-en="Reset Password" data-ml="പാസ്‌വേഡ് റീസെറ്റ് ചെയ്യുക">Reset Password</h3>
        <p class="auth-sub" data-en="Enter your registered email and we'll send you a password reset link."
          data-ml="നിങ്ങളുടെ ഇമെയിൽ നൽകുക, പാസ്‌വേഡ് മാറ്റാനുള്ള ലിങ്ക് ഞങ്ങൾ അയച്ചുതരാം.">
          Enter your registered email and we'll send you a password reset link.
        </p>

        <label data-en="Email Address" data-ml="ഇമെയിൽ വിലാസം">Email Address</label>
        <input type="email" id="forgotEmail" required placeholder="you@example.com"
          data-placeholder-en="you@example.com" data-placeholder-ml="നിങ്ങളുടെ ഇമെയിൽ നൽകുക">

        <button type="submit" class="btn-details auth-submit-btn" data-en="Send Reset Link"
          data-ml="റീസെറ്റ് ലിങ്ക് അയക്കുക">Send Reset Link</button>

        <p class="auth-switch-hint">
          <a href="#" onclick="switchAuthTab('login'); return false;" data-en="← Back to Log In"
            data-ml="← ലോഗിനിലേക്ക് മടങ്ങുക">← Back to Log In</a>
        </p>
      </form>

      <!-- UPDATE PASSWORD FORM (RECOVERY) -->
      <form id="updatePasswordForm" class="auth-form hidden" onsubmit="handleUpdatePasswordSubmit(event)">
        <h3 data-en="Set New Password" data-ml="പുതിയ പാസ്‌വേഡ് നൽകുക">Set New Password</h3>
        <p class="auth-sub" data-en="Enter your new secure password below."
          data-ml="നിങ്ങളുടെ പുതിയ പാസ്‌വേഡ് താഴെ നൽകുക.">
          Enter your new secure password below.
        </p>

        <label data-en="New Password" data-ml="പുതിയ പാസ്‌വേഡ്">New Password</label>
        <input type="password" id="newPasswordInput" minlength="6" required placeholder="Minimum 6 characters"
          data-placeholder-en="Minimum 6 characters" data-placeholder-ml="കുറഞ്ഞത് 6 അക്ഷരങ്ങൾ">

        <button type="submit" class="btn-details auth-submit-btn" data-en="Save New Password"
          data-ml="പുതിയ പാസ്‌വേഡ് സേവ് ചെയ്യുക">Save New Password</button>
      </form>
    </div>
  </div>`;

  html = html.replace(/<\/form>\s*<\/div>\s*<\/div>/, '</form>' + additionalForms);
}

fs.writeFileSync('suggayitt povaa.html', html, 'utf8');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated suggayitt povaa.html and created index.html');
