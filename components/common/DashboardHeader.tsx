"use client";

import YearbookProjectSelector from "./YearbookProjectSelector";
import Link from "next/link";

export default function DashboardHeader() {
  // TODO: Make this mobile responsive
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
      <YearbookProjectSelector onSelect={() => undefined} />
    </header>
  );
}
