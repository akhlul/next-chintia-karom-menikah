import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMDAyNzU3MiwiZXhwIjoxOTM1NjAzNTcyfQ.MvgN-342JgYqKQNJ3XSktvKGA1PfWQwA65ZADj_KRhA'
const SUPABASE_URL = "https://rfcxcxhssqbdebmnhvfr.supabase.co"

const options = {}
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, options);

export default supabase;
