import type { Metadata } from "next/types";
import { createClient } from "../../../lib/supabase-server";

async function fetchYearbookData(yearbookSlug: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("yearbooks")
    .select("*")
    .eq("slug", yearbookSlug)
    // TODO: also query by ID
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

type YearbookHomeParams = {
  yearbookId: string;
};

export default async function YearbookHome({
  params,
}: {
  params: YearbookHomeParams;
}) {
  const { yearbookId } = params;
  const data = await fetchYearbookData(yearbookId);

  const pageMetadata = generateOtherMetaTags();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageMetadata) }}
      />
      <div className="p-16 h-full bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-16 border-4 border-black text-[#333333] bg-[#FFD23F] dark:text-white dark:bg-[#2767CE] drop-shadow-pop">
            <div className="text-4xl font-bold font-display">Yearbook!</div>
          </div>
          <div className="mt-4 text-2xl font-bold">{data.title}</div>
        </div>
      </div>
    </>
  );
}

function generateOtherMetaTags() {
  return {
    "@context": "https://schema.org",
    "@type": "PublicationIssue",
    // name: product.name,
    // image: product.image,
    // description: product.description,
  };
}

export async function generateMetadata({
  params,
}: {
  params: YearbookHomeParams;
}): Promise<Metadata> {
  const { yearbookId } = params;
  const { title } = await fetchYearbookData(yearbookId);
  return {
    title: `${title} - Yearbook`,
    description: "",
    openGraph: {
      type: "website",
    },
  };
}
