import { Session } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase-client";

interface AccountInfoProps {
  session: Session;
}

export default function AccountInfo({ session }: AccountInfoProps) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [avatar_url, setAvatarUrl] = useState(null);

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      const user = supabase.auth.user();

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, website, avatar_url`)
        .eq("id", user!.id) // TODO: Fix this code smell
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert(error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-4 text-center">
      <div className="text-xl font-bold">You are currently signed in.</div>
      <div className="my-2">
        <label className="mr-2" htmlFor="email">
          Email:
        </label>
        <input
          id="email"
          type="text"
          value={session.user?.email ?? ""}
          disabled
        />
      </div>

      <div>
        <button
          className="p-2 shadow-md hover:shadow-lg bg-slate-500 hover:bg-slate-600 hover:dark:bg-slate-400 rounded-md"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
