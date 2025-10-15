// src/services/supabaseServices.ts
import { createClient } from '@supabase/supabase-js';

console.log('DEBUG (supabaseServices): process.env.SUPABASE_URL:', process.env.SUPABASE_URL);
console.log('DEBUG (supabaseServices): process.env.SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error('ERRO CRÍTICO: SUPABASE_URL não está definida nas variáveis de ambiente.');
  process.exit(1); // Encerra o processo se algo crítico faltar
}
if (!supabaseAnonKey) {
  console.error('ERRO CRÍTICO: SUPABASE_ANON_KEY não está definida nas variáveis de ambiente.');
  process.exit(1); // Encerra o processo se algo crítico faltar
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);