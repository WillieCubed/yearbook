export default function YoutubeEmbed({ embedId }: { embedId: string }) {
  return (
    <div className="overflow-hidden">
      <iframe
        className="w-full aspect-video rounded-lg shadow-lg"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Clark Wrapped"
      />
    </div>
  );
}
