import { createClient } from '@supabase/supabase-js';
import { SUPABASE_PROJECT, SUPABASE_KEY } from '$env/static/private';

export const supabase = createClient(`https://${SUPABASE_PROJECT}.supabase.co`, SUPABASE_KEY);
