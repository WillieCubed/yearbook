import "@fontsource/inter";
import "../../styles/globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark:bg-slate-900 dark:text-slate-100">
      {/* TODO: Include shared UI here e.g. a header or sidebar */}
      {children}
    </div>
  );
}
