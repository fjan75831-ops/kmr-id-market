import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://axbmfmofnwkdpkagksnm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_hGlhD2I6UALwuH5JNSVQIw_I0hR7Aut';

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);
