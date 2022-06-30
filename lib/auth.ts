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
  // React.useEffect(() => {
  //   return () => {};
  // }, [session]);

  const signInWithDiscord = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: "discord",
    });
    if (error) {
      throw error;
    }
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

  const isSignedIn = supabase.auth.user !== null;

  return {
    isSignedIn,
    signIn: signInWithDiscord,
    signOut,
    user: userData,
  };
}
