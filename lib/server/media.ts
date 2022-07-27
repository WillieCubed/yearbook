import { TokensData } from "../auth";
import { supabase } from "../supabase-client";

const GOOGLE_PHOTOS_SEARCH_ENDPOINT =
  "https://photoslibrary.googleapis.com/v1/mediaItems:search";

/**
 * @see https://developers.google.com/photos/library/reference/rest/v1/mediaItems#MediaItem
 */
type MediaItem = {
  id: string;
  description: string;
  baseUrl: string;
  mimeType: string;
  mediaMetadata: {
    creationTime: string;
    height: string;
    width: string;
  };
  contributorInfo: string;
  filename: string;
};

/**
 * @see https://developers.google.com/photos/library/reference/rest/v1/mediaItems
 */
type GooglePhotosAPISearchResult = {
  mediaItems: MediaItem[];
  nextPageToken: string;
};

type RequestBody = {
  albumId: string;
  pageSize?: number;
  pageToken?: string;
  orderBy?: string;
  filters?: Record<string, any>;
};

/**
 * Get photos and videos from the given album.
 */
export async function fetchMedia(albumId: string) {
  const { data, error } = await supabase
    .from("service_google_auth_tokens")
    .select("*")
    .eq("id", "default")
    .maybeSingle();

  if (error) {
    throw error;
  }

  // TODO: Find out how to handle expired token
  const { access_token } = data as TokensData;

  async function queryPhotosApi(pageToken: string | undefined = undefined) {
    const requestBody: RequestBody = {
      albumId: albumId,
      pageSize: 100,
      // orderBy: 'MediaMetadata.creation_time',
      // filters: {

      // },
    };

    if (pageToken) {
      requestBody.pageToken = pageToken;
    }

    const result = await fetch(`${GOOGLE_PHOTOS_SEARCH_ENDPOINT}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(requestBody),
    });
    const contents = (await result.json()) as GooglePhotosAPISearchResult;
    return contents;
  }

  const result = await queryPhotosApi();
  const allResults = result.mediaItems;
  let nextPageToken = result.nextPageToken;
  while (nextPageToken) {
    console.debug("Making another request");
    const { nextPageToken: token, mediaItems } = await queryPhotosApi(
      nextPageToken
    );
    nextPageToken = token;
    allResults.push(...mediaItems);
    console.log(`Currently have ${allResults.length}`);
  }
  return allResults;
}

export function getRealImageUrl(
  baseUrl: string,
  width: string,
  height: string
) {
  // TODO: Use the actual better query param version of this
  return `${baseUrl}?w=${width}&h=${height}`;
}
