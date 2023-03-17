"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createClient } from "../../lib/supabase-browser";
import type { Database } from "../../lib/supabase.types";

type SupabaseContext = {
  supabase: SupabaseClient<Database>;
  session: Session | null;
};

const Context = createContext<SupabaseContext | undefined>(undefined);

export default function SupabaseProvider({
  children,
}: React.PropsWithChildren) {
  const [supabase] = useState(() => createClient());
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth
      .getSession()
      .then(({ data }) => {
        setSession(data.session);
      })
      .catch(() => {
        setSession(null);
      });
  }, [supabase]);

  return (
    <Context.Provider value={{ supabase, session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  let context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  } else {
    return context;
  }
};
