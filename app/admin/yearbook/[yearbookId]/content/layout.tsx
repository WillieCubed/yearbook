export const metadata = {
  title: "Edit Content - Yearbook Admin",
};

export default function YearbookContentDashboardLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <div className="h-full bg-neutral-100">
      <div className="py-2">Content editor</div>
      <main>{children}</main>
    </div>
  );
}
