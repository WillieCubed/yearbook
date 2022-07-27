import YoutubeEmbed from "../misc/YouTubeEmbed";

/**
 * The opening slide to the Wrapped stories.
 */
export default function StoryIntro() {
  // TODO
  return (
    <div className="w-full h-full rounded-b-[16px] lg:rounded-t-[16px] bg-secondary">
      <div className="p-8">
        <div className="uppercase font-bold font-display text-xl">
          Presenting&hellip;
        </div>
        <h1 className="text-6xl font-bold font-display my-4 mb-8">
          Clark Wrapped
        </h1>
      </div>
      <div className="lg:p-2">
        <YoutubeEmbed embedId="dQw4w9WgXcQ" />
      </div>
      <div className="p-2 my-4 text-2xl text-center">
        A story of the 2022 Clark Summer Research Program.
      </div>
    </div>
  );
}
