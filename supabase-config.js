// ==============================================================================
// SUGGAYITT POVAA - SUPABASE CONFIGURATION
// ==============================================================================

const SUPABASE_CONFIG = {
  url: 'https://pkejbrecrrkutjzfqdkj.supabase.co',
  anonKey: 'sb_publishable_zgL0i4ZsoEJisYXHYzBL6g_XiQxvQvo'
};

// Initialize and expose global Supabase client
let supabaseClient = null;

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;

  if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
    supabaseClient = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storage: window.localStorage
        }
      }
    );
    return supabaseClient;
  }
  return null;
}

// Auto-initialize if library is already loaded
if (typeof window !== 'undefined') {
  window.SUPABASE_CONFIG = SUPABASE_CONFIG;
  window.getSupabaseClient = getSupabaseClient;
  // Attempt early initialization
  window.addEventListener('DOMContentLoaded', () => {
    window.supabaseClient = getSupabaseClient();
  });
}
