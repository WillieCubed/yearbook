"use client";

import Link from "next/link";
import { Popover } from "@headlessui/react";

interface NavItemProps {
  slug: string;
  icon: JSX.Element;
}

function NavItem({
  icon,
  slug,
  children,
}: React.PropsWithChildren<NavItemProps>) {
  return (
    <div className="px-2 py-1">
      <Link
        className="flex px-1 py-3 space-x-2 hover:bg-neutral-300 hover:dark:bg-neutral-700 focus:bg-neutral-300 focus:dark:bg-neutral-700 rounded-md transition font-display text-xl"
        href={slug}
      >
        <div className="p-1">{icon}</div>
        {children}
      </Link>
    </div>
  );
}

interface SideNavigationBarProps {
  // TODO: Only enable Wrapped after admin onboarding is complete
}

export default function SideNavigationBar({
  disabledComponents,
}: SideNavigationBarProps) {
  return (
    <div className="flex-none md:w-[320px] bg-white dark:bg-neutral-800 dark:text-white border-slate-800 dark:border-r-neutral-700 border-2">
      <div>
        <NavItem slug="/admin/yearbook/content">Content</NavItem>
        <NavItem slug="/admin/yearbook/wrapped">Wrapped</NavItem>
        <NavItem slug="/admin/yearbook/credits">Credits</NavItem>
        <NavItem slug="/admin/yearbook/users">Users</NavItem>
      </div>
      <div>
        <NavItem slug="/admin/yearbook/settings">Settings</NavItem>
      </div>
    </div>
  );
}
