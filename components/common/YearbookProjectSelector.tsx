"use client";

import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

interface YearbookProjectSelectorProps {
  onSelect: (yearbookId: string) => void;
}

export default function YearbookProjectSelector({
  onSelect,
}: YearbookProjectSelectorProps) {
  const handleSelection = (yearbookId: string | null, closeFn) => {
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
          <Popover.Button className="p-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700 rounded-md">
            {/* TODO: Use selection from local storage */}
            <div>Select edition</div>
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
            <Popover.Panel className="my-2 absolute z-10">
              {({ close }) => (
                <YearbookProjectSelectorPopover
                  editions={[
                    {
                      id: "2023",
                      title: "UTD 2022-2023",
                      imageUrl: "https://picsum/160/90",
                    },
                  ]}
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
          className="block px-4 py-2 hover:bg-slate-800 transition ease-in"
          href={`/admin/yearbook/${id}`}
          onClick={() => onSelect(id)}
        >
          {title}
        </Link>
      ))}
      <Link
        className="block px-4 py-1 hover:bg-slate-800 transition ease-in text-blue-500"
        href={`/admin/yearbook/`}
      >
        See all yearbooks
      </Link>
    </div>
  );
}
