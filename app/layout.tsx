import "server-only";

import React from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import SupabaseProvider from "../components/common/SupabaseProvider";
import SupabaseListener from "../components/common/SuapbaseListener";
import { createClient } from "../lib/supabase-server";
import "./globals.css";

const displayFont = Be_Vietnam_Pro({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "auto",
  variable: "--font-display",
});

// Caching should be stopped for Supabase Auth to function
export const revalidate = 0;

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en" className={displayFont.className}>
      <body className="dark:bg-slate-900 dark:text-slate-100">
        <SupabaseProvider>
          <SupabaseListener serverAccessToken={session?.access_token} />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
