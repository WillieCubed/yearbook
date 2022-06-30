import ShareIcon from "../assets/icons/ShareIcon";

/**
 * Component properties for a ShareStoryPage.
 */
interface ShareStoryPageProps {
  shareTitle: string;
  images: File[];
  onStoryShared?: () => void;
}

/**
 * A call to action story for Clark Wrapped.
 */
export default function ShareStoryPage({
  shareTitle,
  images,
  onStoryShared,
}: ShareStoryPageProps) {
  const handleShare = () => {
    shareWrapped(shareTitle, "A Clark Summer Research story.", images)
      .then(() => {
        console.debug("Story shared successfully");
        if (onStoryShared) {
          onStoryShared();
        }
      })
      .catch((error) => {
        console.error("Could not share story", error);
      });
  };

  return (
    <div className="w-full p-8 rounded-b-[16px] lg:rounded-t-[16px] bg-secondary text-center">
      <h1 className="font-bold text-4xl">And that was Clark Wrapped!</h1>
      <div className="my-4 text-xl">(At least for now!)</div>
      <button
        className="p-4 bg-extra1 hover:opacity-80 text-slate-900 font-bold rounded-full space-x-2"
        onClick={handleShare}
      >
        <ShareIcon />
        <span className="align-middle">Share story</span>
      </button>
    </div>
  );
}

async function shareWrapped(
  title: string,
  descriptionText: string,
  images: File[]
) {
  const shareUrl = window.location.href;

  if (navigator.canShare && navigator.canShare({ files: images })) {
    const shareData = {
      // TODO: An array of scrapbook images generated by server
      files: images,
      text: descriptionText,
      title: title,
      url: shareUrl,
    };
    await navigator.share(shareData);
  } else if (navigator.clipboard) {
    navigator.clipboard.write([
      new ClipboardItem(
        { "text/plain": title },
        { presentationStyle: "inline" }
      ),
      // TODO: Fix a probable bug in this
      ...images.map(
        (image) =>
          new ClipboardItem(
            { "image/png": image },
            { presentationStyle: "attachment" }
          )
      ),
    ]);
  } else {
    throw new Error("OS does not support sharing from web.");
  }
}
