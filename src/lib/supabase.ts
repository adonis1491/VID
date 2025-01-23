/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

console.log('Full import.meta:', import.meta)
console.log('import.meta.env keys:', Object.keys(import.meta.env))
// Remove this line: console.log('VITE_SUPABASE_URL from env:', process.env.VITE_SUPABASE_URL)

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('Supabase URL (import.meta.env):', supabaseUrl)
console.log('Supabase Anon Key (import.meta.env):', supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Supabase URL or Anon Key is missing. Check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)