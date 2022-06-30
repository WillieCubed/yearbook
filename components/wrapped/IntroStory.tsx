/**
 * The opening slide to the Wrapped stories.
 */
export default function StoryIntro() {
  return (
    <div className="w-full p-8 rounded-b-[16px] lg:rounded-t-[16px] bg-secondary">
      <div className="uppercase font-bold text-xl">Presenting&hellip;</div>
      <h1 className="text-6xl font-bold my-4 mb-8">Clark Wrapped</h1>
      <div>
        <div className="text-xl">
          It&apos;s been a great summer so far. Let&apos;s see what you and
          others have done!
        </div>
        {/* TODO: Spice this page up a little with some sort of SVG background */}
      </div>
    </div>
  );
}
