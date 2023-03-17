"use client";

import Link from "next/link";
import YearbookProjectSelector from "./YearbookProjectSelector";
import { useSupabase } from "./SupabaseProvider";
import type { YearbookInfo } from "../../lib/yearbook";
import { useEffect, useState } from "react";

export default function DashboardHeader() {
  const [yearbooks, setYearbooks] = useState<YearbookInfo[]>([]);
  const [selectedYearbook, setSelectedYearbook] = useState<YearbookInfo | null>(
    null
  );
  const { supabase } = useSupabase();

  // TODO: Please move this to be server-side rendered
  useEffect(() => {
    // TODO: Get yearbooks that belong to current user
    supabase
      .from("yearbooks")
      .select("*")
      .then(({ data, error }) => {
        if (error) {
          // TODO: Log error
          return [];
        }
        const yearbooks: YearbookInfo[] = data.map(
          ({ id, title, thumbnail_url, created_at, owner }) => {
            return {
              id: id,
              title: title,
              thumbnailUrl: thumbnail_url,
              createdAt: created_at,
              owner: owner,
            };
          }
        ); // TODO: Fix this code smell
        setYearbooks(yearbooks);
      });
  }, [supabase]);
  // TODO: Make this mobile responsive

  const handleSelection = (yearbookId: string) => {
    const yearbook = yearbooks.filter(({ id }) => yearbookId)[0] ?? null;
    setSelectedYearbook(yearbook);
  };

  // TODO: Actually handle selected project and store in local storage
  return (
    <header className="bg-white dark:bg-neutral-900 flex space-between items-center">
      <div>
        <Link
          href="/admin"
          className="block p-4 focus:bg-neutral-700 hover:bg-neutral-700 font-display font-bold text-2xl"
        >
          Yearbook
        </Link>
      </div>
      <YearbookProjectSelector
        onSelect={handleSelection}
        yearbooks={yearbooks}
        selected={selectedYearbook}
      />
    </header>
  );
}
