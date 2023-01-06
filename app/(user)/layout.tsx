export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: Include shared UI here e.g. a header or sidebar */}
      {children}
    </>
  );
}
