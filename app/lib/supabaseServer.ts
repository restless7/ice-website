import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://tpjzutddbvidfpfaokjx.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwanp1dGRkYnZpZGZwZmFva2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MTcwMjUsImV4cCI6MjA5MTA5MzAyNX0.m0eUCIWsPRLZswn7sgsp4sJrvisPXVAUQHZYnU11jec";

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey);
