export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* TODO: Include shared UI here e.g. a header or sidebar */}
      {children}
    </div>
  );
}
