import YearbookVolumeSelector from "../../components/common/YearbookVolumeSelector";
import { createClient } from "../../lib/supabase-server";
import { Database } from "../../lib/supabase.types";
import { YearbookInfo } from "../../lib/yearbook";

export default async function AdminPage() {
  // TODO: If Yearbook volume stored in local storage, simply redirect
  const supabase = createClient();

  // TODO: Only select yearbooks from current owner
  const { data, error } = await supabase.from("yearbooks").select("*");
  if (error) {
    throw new Error();
  }

  const yearbooks = data.map(mapTableToYearbook);

  return (
    <div>
      <section className="p-8 max-w-5xl">
        <div className="text-3xl font-bold font-display">
          Select a volume to continue.
        </div>
        <div className="my-4 flex p-4 bg-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 border-2 rounded-md justify-between">
          <div>Filter by</div>
          <div>(icon)</div>
        </div>
        <YearbookVolumeSelector mode={"list"} yearbooks={yearbooks} />
      </section>
    </div>
  );
}

type DBYearbook = Database["public"]["Tables"]["yearbooks"]["Row"];

function mapTableToYearbook({
  id,
  title,
  thumbnail_url,
  created_at,
  owner,
}: DBYearbook): YearbookInfo {
  return {
    id: id,
    title: title,
    thumbnailUrl: thumbnail_url,
    createdAt: created_at,
    owner: owner,
  };
}
