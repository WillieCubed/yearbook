/**
 * Component properties for a SpotifyEmbed.
 */
interface SpotifyEmbedProps {
  /**
   * The playlist link copied from Spotify's web UI.
   */
  link: string;
  /**
   * Additional class names to apply to the iframe.
   */
  className?: string | undefined;
  /**
   * Additional attributes to apply to the iframe.
   */
  [key: string]: any;
}

/**
 * A component that exposes an embedded Spotify player.
 */
export default function SpotifyEmbed({
  link,
  className,
  ...props
}: SpotifyEmbedProps) {
  const url = new URL(link);
  return (
    <>
      <iframe
        title="Spotify Web Player"
        src={`https://open.spotify.com/embed${url.pathname}`}
        className={className}
        frameBorder="0"
        allowFullScreen={false}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        {...props}
      />
    </>
  );
}
