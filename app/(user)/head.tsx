export default function Head({ params }: { params: { slug: string } }) {
  const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.DEFAULT_URL ||
    "https://utdwrapped.vercel.app";
  return (
    <>
      <meta charSet="utf-8" />
      <title>UTD Wrapped - Coming soon!</title>
      <meta
        name="description"
        content="Review what happened in your past year at UTD."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:title" content="UTD Wrapped" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:image" content={`${baseUrl}/assets/meta/index.png`} />
      <meta
        property="og:description"
        content="Review what happened in your past year at UTD."
      />
      <meta property="og:site_name" content="Year in UTD" />
    </>
  );
}
