import { getWittyMemoryComment } from "../../lib/generated";
import SpotifyEmbed from "../misc/SpotifyEmbed";

/**
 * A story memory that displays a Spotify embed.
 */
export default function PlaylistStory() {
  const wittyComment = getWittyMemoryComment();

  return (
    <div className="h-full w-full p-8">
      <div className="font-bold text-4xl text-center lg:text-left">
        Listen to the sounds of Clark.
      </div>
      <div className="text-2xl my-4">{wittyComment}</div>
      <div className="flex justify-center p-4">
        <div>
          <SpotifyEmbed
            className="rounded-lg"
            link={process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST as string}
          />
          <div className="my-4 text-center text-lg">
            Feel free to add a song!
          </div>
        </div>
      </div>
    </div>
  );
}
