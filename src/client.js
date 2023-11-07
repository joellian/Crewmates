import { createClient } from '@supabase/supabase-js'

const URL = 'https://vklzccagbxmyrbpuacvd.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbHpjY2FnYnhteXJicHVhY3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMjIwMDEsImV4cCI6MjAxNDg5ODAwMX0.Nafq5WDv8qrKi9DJ9sE5t3dhi4BeVKomL9iXS73B3Ws';


export const supabase = createClient(URL, API_KEY);