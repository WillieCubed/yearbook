"use client";

import { Auth } from "@supabase/auth-ui-react";
import {
  // Import predefined theme
  ThemeSupa,
} from "@supabase/auth-ui-shared";
import { useRouter } from "next/navigation";
import React from "react";
import { createClient } from "../../lib/supabase-browser";
import { useSupabase } from "../common/SupabaseProvider";

const supabaseBrowser = createClient();

export default function SignInSection() {
  const { supabase, session } = useSupabase();
  const router = useRouter();

  const handleAuth = async () => {
    // Sign in if not authenticated; sign out otherwise
    // TODO
    if (session) {
      supabase.auth.signOut().then(({ error }) => {
        if (error) {
          console.error(error);
          return;
        }
        router.refresh();
      });
    }
  };

  const authButtonText = session ? "Sign out" : "Sign in";
  const authLongText = session
    ? "You are currently signed in."
    : "You are not currently signed in.";

  return (
    <section className="px-8 max-w-5xl">
      <h1 className="text-2xl font-bold">Authentication</h1>
      <div className="space-y-2">
        <div className="my-2">{authLongText}</div>
        <button
          className="p-2 rounded-md bg-white dark:bg-slate-700 dark:hover:bg-slate-600 transition ease-in-out hover:shadow-md focus:shadow-md"
          onClick={handleAuth}
        >
          {authButtonText}
        </button>
        <Auth
          supabaseClient={supabaseBrowser}
          appearance={{ theme: ThemeSupa }}
          providers={["google"]}
        />
      </div>
    </section>
  );
}
