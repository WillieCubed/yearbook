"use client";

import type { Route } from "next";
import Link from "next/link";
import { YearbookInfo } from "../../lib/yearbook";

type ListMode = "list" | "grid";

interface YearbookVolumeSelectorProps {
  mode: ListMode;
  yearbooks: YearbookInfo[];
}

export default function YearbookVolumeSelector({
  mode,
  yearbooks,
}: YearbookVolumeSelectorProps) {
  const handleNewYearbookCreation = () => {
    // TODO: Show a dialog or redirect to new page or something (probably the latter)
  };

  const cards = generateList(yearbooks, mode, handleNewYearbookCreation);
  return (
    <section>
      {/* TODO: Display all yearbook volumes that user has access to */}
      {cards}
    </section>
  );
}

function generateList(
  yearbooks: YearbookInfo[],
  mode: ListMode,
  onNewYearbook: () => void
) {
  const cards = yearbooks.map((yearbook) => (
    <YearbookCard key={yearbook.id} yearbook={yearbook} />
  ));
  cards.push(<NewYearbookCard onClick={onNewYearbook} />);
  return (
    <div className="space-y-2 md:space-y-0 md:space-x-4 md:grid md:grid-cols-3">
      {cards}
    </div>
  );
}

function YearbookCard({ yearbook }: { yearbook: YearbookInfo }) {
  return (
    <Link
      className="p-2 text-center aspect-[3/2] rounded-md border-2 hover:shadow-lg focus:shadow-lg border-slate-100 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-slate-700 flex items-center justify-center"
      href={`/admin/yearbook/${yearbook.id}/content` as Route}
    >
      {/* TODO: Show image */}
      <div className="text-xl font-bold">{yearbook.title}</div>
    </Link>
  );
}

interface NewYearbookCardProps {
  onClick: () => void;
}

function NewYearbookCard({ onClick }: NewYearbookCardProps) {
  return (
    <div
      className="p-2 text-center aspect-[3/2] rounded-md border-2 hover:shadow-lg focus:shadow-lg border-slate-100 bg-white hover:bg-neutral-50 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:border-slate-700 flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <div className="text-xl font-bold">Create a new yearbook!</div>
    </div>
  );
}
