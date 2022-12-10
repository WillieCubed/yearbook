export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <title>Yearbook</title>
      <meta
        name="description"
        content="Review what happened in your past year at UTD."
      />
      <meta
        name="og:description"
        content="Review what happened in your past year at UTD."
      />
    </>
  );
}
