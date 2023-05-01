import React from "react";

export const metadata = {
  title: "Dashboard - Yearbook Admin",
};

export default function YearbookWrapperLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="h-screen bg-neutral-100 dark:bg-gray-800">{children}</div>
  );
}
