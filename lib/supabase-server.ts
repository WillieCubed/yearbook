import { headers, cookies } from "next/headers";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "./supabase.types";

export function createClient() {
  return createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
}
