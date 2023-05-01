"use client";

import { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocalYearbookData } from "../../lib/client/yearbook-storage";

interface NavItemProps {
  slug: string;
  icon?: JSX.Element;
  active: boolean;
}

function NavItem({
  icon,
  slug,
  children,
  active,
}: React.PropsWithChildren<NavItemProps>) {
  return (
    <div className="px-2 py-1">
      <Link
        className={`flex px-1 py-3 space-x-2 hover:bg-neutral-300 hover:dark:bg-neutral-700 focus:bg-neutral-300 focus:dark:bg-neutral-700 rounded-md transition font-display text-xl ${
          active ? "bg-neutral-100 dark:bg-neutral-800" : ""
        }`}
        href={slug as Route}
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

export default function SideNavigationBar({}: SideNavigationBarProps) {
  const path = usePathname();
  const { loadYearbook } = useLocalYearbookData();
  // TODO: Use hook to get currently selected yearbook ID

  const id = loadYearbook()?.id;
  console.log(id);

  return (
    <div className="flex-none md:w-[320px] bg-white dark:bg-neutral-900 dark:text-white border-slate-900 dark:border-r-neutral-800 border-2">
      <div>
        <NavItem
          slug={id ? (`/admin/yearbook/${id}/content` as Route) : "/admin"}
          icon={<></>}
          active={id ? path === `/admin/yearbook/${id}/content` : false}
        >
          Content
        </NavItem>
        <NavItem
          slug={id ? (`/admin/yearbook/${id}/wrapped` as Route) : "/admin"}
          icon={<></>}
          active={id ? path === `/admin/yearbook/${id}/wrapped` : false}
        >
          Wrapped
        </NavItem>
        <NavItem
          slug={id ? (`/admin/yearbook/${id}/credits` as Route) : "/admin"}
          icon={<></>}
          active={id ? path === `/admin/yearbook/${id}/credits` : false}
        >
          Credits
        </NavItem>
        <NavItem
          slug={id ? (`/admin/yearbook/${id}/users` as Route) : "/admin"}
          icon={<></>}
          active={id ? path === `/admin/yearbook/${id}/users` : false}
        >
          Users
        </NavItem>
      </div>
      <div>
        <NavItem
          slug="/admin/settings"
          icon={<></>}
          active={path === "/admin/settings"}
        >
          Settings
        </NavItem>
      </div>
    </div>
  );
}
