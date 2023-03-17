"use client";

import { Popover, Transition } from "@headlessui/react";
import { Route } from "next";
import Link from "next/link";
import { Fragment } from "react";
import ArrowDropDown from "../../assets/icons/ArrowDropDown";
import { YearbookInfo } from "../../lib/yearbook";

interface YearbookProjectSelectorProps {
  onSelect: (yearbookId: string) => void;
  yearbooks: YearbookInfo[];
  selected: YearbookInfo | null;
}

export default function YearbookProjectSelector({
  onSelect,
  yearbooks,
  selected,
}: YearbookProjectSelectorProps) {
  const handleSelection = (yearbookId: string | null, closeFn: () => void) => {
    if (yearbookId) {
      onSelect(yearbookId);
      // TODO: Close thing
    }
    closeFn();
  };

  return (
    <Popover className="relative p-2 bg-neutral-3 rounded-md">
      {({ open }) => (
        <>
          <Popover.Button className="flex p-2 space-x-2 bg-neutral-100 hover:bg-neutral-200 focus:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 rounded-md transition ease-in-out">
            {/* TODO: Use selection from local storage */}
            <div>{selected?.title ?? "Select edition"}</div>
            <div>
              <ArrowDropDown
                className={`transition ease-in ${open ? "rotate-180" : ""}`}
              />
            </div>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="my-2 absolute shadow-lg z-10 rounded-md">
              {({ close }) => (
                <YearbookProjectSelectorPopover
                  editions={yearbooks}
                  onSelect={(yearbookId) => handleSelection(yearbookId, close)}
                />
              )}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

interface YearbookProjectSelectorPopoverProps {
  editions: YearbookInfo[];
  onSelect: (yearbookId: string | null) => void;
}

function YearbookProjectSelectorPopover({
  editions,
  onSelect,
}: YearbookProjectSelectorPopoverProps) {
  return (
    <div className="w-[320px] py-2 rounded-lg bg-white dark:bg-slate-900">
      {editions.map(({ id, title }) => (
        <Link
          key={id}
          className="block px-4 py-2 hover:bg-neutral-100 focus:bg-neutral-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800 transition ease-in"
          href={`/admin/yearbook/${id}`}
          onClick={() => onSelect(id)}
        >
          {title}
        </Link>
      ))}
      <Link
        className="block px-4 py-1 hover:bg-neutral-100 focus:bg-neutral-200 dark:hover:bg-slate-800 dark:focus:bg-slate-800 transition ease-in text-blue-500"
        href="/admin/yearbook"
        onClick={() => onSelect(null)}
      >
        See all yearbooks
      </Link>
    </div>
  );
}
