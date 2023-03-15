import React from "react";
import DashboardHeader from "../../components/common/DashboardHeader";
import SideNavigationBar from "../../components/common/SideNavigationBar";

export const metadata = {
  title: "Dashboard - Yearbook Admin",
};

export default function AdminDashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="h-screen bg-neutral-100 dark:bg-gray-800">
      <DashboardHeader />
      <div className="h-full flex">
        <SideNavigationBar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
