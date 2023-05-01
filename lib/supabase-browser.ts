import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import type { Database } from "./supabase.types";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export function createClient() {
  return createBrowserSupabaseClient<Database>({});
}
