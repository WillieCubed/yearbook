import { Session } from "@supabase/supabase-js";
import React from "react";
import supabase from "./hooks/supabase";

export interface User {
  name: string;
  discordId: string;
  discordTag: string;
  email: string;
}

export function useProfile() {
  const [user, setUser] = React.useState<User | null>(null);
  return {
    user,
  };
}

export function useAuth() {
  const [user, setUser] = React.useState<User | null>(null);
  React.useEffect(() => {
    return () => {
      supabase.auth.onAuthStateChange((_, session) => {
        if (session) {
          const supabaseUser = session.user;
        }
      });
    };
  }, []);

  const signInWithDiscord = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "discord",
    });
    if (error) {
      throw error;
    }
    const session = await supabase.auth.getSession();
    const user = await supabase.auth.getUser();
    return { user: user, session: session };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const userData: User = {
    name: "",
    discordId: "",
    discordTag: "",
    email: "",
  };

  const isSignedIn = user !== null;

  return {
    isSignedIn,
    signIn: signInWithDiscord,
    signOut,
    user: userData,
  };
}

export type TokensData = {
  access_token: string;
  refresh_token: string;
  expiry_date: number;
};
