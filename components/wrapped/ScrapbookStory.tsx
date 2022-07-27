import { ScrapbookMemory } from "../../lib/wrapped";

interface ScrapbookStoryProps {
  memory: ScrapbookMemory;
  index: number;
}

export default function ScrapbookStory({ memory, index }: ScrapbookStoryProps) {
  const imageBlocks = memory.images.map((url) => {
    return (
      <div className="object-cover">
        <img className="object-fill" key={`story-${index}`} src={url} />
      </div>
    );
  });

  return (
    <section
      className="w-full max-h-full grid grid-flow-col grid-cols-2 grid-rows-3"
      key={`story-${index}`}
    >
      {imageBlocks}
    </section>
  );
}
