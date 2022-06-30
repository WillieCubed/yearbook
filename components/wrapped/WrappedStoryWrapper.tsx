import { useRouter } from "next/router";
import React from "react";
import { Memory, MemoryCollection } from "../../lib/wrapped";
import StoryIntro from "./IntroStory";
import PlaylistStory from "./PlaylistMemoryPage";
import ShareStoryPage from "./ShareStoryPage";

const DEFAULT_WRAPPED_TITLE = "My Clark 2022 Wrapped";

function memoryToStory(memory: Memory, index: number) {
  // TODO: Obviously fix this to display useful information.
  return (
    <section className="h-full w-full p-8" key={`story-${index}`}>
      <div>This is a story</div>
    </section>
  );
}

/**
 * Component properties for a WrappedStoriesWrapper.
 */
interface WrappedStoryWraperProps {
  /**
   * Data used to populate this story.
   *
   * Note: the wrapper may include additional stories with content that may not
   * be a one-to-one mapping of memories. There may be more stories than
   * memory contents.
   */
  memoryData: MemoryCollection;
  /**
   * The index of the currently displayed story.
   */
  currentStoryIndex: number;
  /**
   * A callback triggered whenever the current story advances.
   */
  onStoryUpdate: (newIndex: number) => void;
  /**
   * A callback triggered after a story is completed.
   */
  onStoryComplete?: () => void;
}

/**
 * A wrapper to control the Wrapped story experience.
 */
export default function WrappedStoriesWrapper({
  memoryData,
  currentStoryIndex,
  onStoryUpdate: onMemoryUpdate,
  onStoryComplete,
}: WrappedStoryWraperProps) {
  const router = useRouter();
  const { memories, statistics, generated } = memoryData;

  const stories = [<StoryIntro key="intro" />];
  const memoryStories = memories.map(memoryToStory);
  stories.concat(memoryStories);
  stories.push(<PlaylistStory key="playlist" />);
  stories.push(
    <ShareStoryPage
      key="share"
      shareTitle={DEFAULT_WRAPPED_TITLE}
      images={[]}
      onStoryShared={onStoryComplete}
    />
  );

  const advanceStory = () => {
    onMemoryUpdate(Math.min(currentStoryIndex + 1, stories.length));
  };

  const decrementStory = () => {
    onMemoryUpdate(Math.max(currentStoryIndex - 1, 0));
  };

  const currentStory = stories[currentStoryIndex];
  const notOnFirstPage = currentStoryIndex !== 0;
  const notOnLastPage = currentStoryIndex !== stories.length - 1;

  // TODO: Figure out contextual use for this
  const [showPulse, setShowPulse] = React.useState(false);

  return (
    <div className="h-full w-full">
      {/* TODO: Include story progress indicator at the top */}
      <section className="max-w-3xl rounded-b-[16px] lg:rounded-t-[16px] mx-auto bg-gray-500">
        {currentStory}
      </section>
      {/* TODO: Implement stepper UX */}
      <div className="flex m-4 lg:mt-8 space-x-4">
        {notOnFirstPage && (
          <div
            className="px-8 py-4 w-full max-w-lg mx-auto bg-primary text-slate-900 font-bold text-xl text-center rounded-full cursor-pointer hover:drop-shadow-lg hover:bg-gray-600 transition"
            onClick={() => {
              if (notOnLastPage) {
                decrementStory();
              } else {
                router.replace("/");
              }
            }}
            tabIndex={0}
          >
            {!notOnLastPage ? "Go home" : "Back"}
          </div>
        )}
        {notOnLastPage && (
          <div
            className={`px-8 py-4 w-full max-w-lg mx-auto bg-primary text-slate-900 font-bold text-xl text-center align-middle rounded-full cursor-pointer hover:drop-shadow-lg hover:bg-gray-600 transition${
              showPulse ? "animate-pulse" : ""
            }`}
            tabIndex={0}
            onClick={advanceStory}
          >
            {!notOnFirstPage ? "Get started" : "Next"}
          </div>
        )}
      </div>
    </div>
  );
}
