import { createClient, Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { supabase } from "../supabase-client";

/**
 * A hook that returns the current auth session for Supabase.
 *
 * This hook automatically keeps track of the Supabase auth state and
 * unsubscribes when needed.
 *
 * @returns A Supabase auth client.
 */
export function useSupabase() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return data?.unsubscribe;
  }, []);

  return session;
}

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);
