"use client";

import { createClient } from "@supabase/supabase-js";

// Get environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// FAIL-SAFE: If variables are missing in production, we use the known-good credentials 
// for the tpjzutddbvidfpfaokjx project. This ensures the site works even if 
// Vercel build-time injection fails.
const PROD_URL = "https://tpjzutddbvidfpfaokjx.supabase.co";
const PROD_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwanp1dGRkYnZpZGZwZmFva2p4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1MTcwMjUsImV4cCI6MjA5MTA5MzAyNX0.m0eUCIWsPRLZswn7sgsp4sJrvisPXVAUQHZYnU11jec";

const finalUrl = supabaseUrl || PROD_URL;
const finalKey = supabaseAnonKey || PROD_ANON_KEY;

// Only warn in client-side environment if BOTH are missing (very unlikely now)
if (typeof window !== 'undefined' && (!finalUrl || !finalKey)) {
  console.error("Supabase configuration completely failed. No environment variables or fallbacks found.");
}

// Create client
export const supabase = createClient(finalUrl, finalKey);
