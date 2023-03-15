export default function AdminPage() {
  // TODO: If Yearbook volume stored in local storage, simply redirect
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
      </section>
    </div>
  );
}

interface YearbookVolumeSelectorProps {
  mode: "list" | "grid";
}

function YearbookVolumeSelector({ mode }: YearbookVolumeSelectorProps) {
  return (
    <div>
      {/* TODO: Display all yearbook volumes that user has access to */}
    </div>
  );
}
