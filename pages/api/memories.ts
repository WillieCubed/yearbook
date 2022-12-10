import type { NextApiRequest, NextApiResponse } from "next";
import { getDiscordInfo } from "../../lib/discord";
import { fetchMedia, getRealImageUrl } from "../../lib/server/media";
import { Memory, MemoryCollection, ProgramStatistic } from "../../lib/wrapped";
import { generateSocialStory } from "./generate-social";

type APIError = {
  type: string;
  message: string;
};

const UNAUTHENTICATED_ERROR: APIError = {
  type: "unauthenticated",
  message:
    "The request is missing an `Authorization: Bearer <TOKEN>` token. Please provide one and try again.",
};
const INVALID_TOKEN_ERROR: APIError = {
  type: "unauthenticated",
  message:
    "The given token is invalid. Please provide a valid one and try again.",
};

const STATS: ProgramStatistic[] = [
  {
    id: "attendance",
    title: "Total Attended Events",
    description: "The number of events you have attended this summer.",
    value: 10,
  },
  {
    id: "points",
    title: "Your total points",
    description:
      "Points were earned by attending events and by going above and beyond.",
    value: 250,
  },
  {
    id: "",
  },
];

/**
 * Note: only works in a server-side context!
 *
 * @param userId Discord user ID. If this is null, only global memories will be returned.
 */
export async function getMemories(
  userId: string | null
): Promise<MemoryCollection> {
  try {
    const ALBUM_ID = process.env.DEFAULT_ALBUM_ID;
    if (!ALBUM_ID) {
      throw new Error("Album ID is undefined");
    }
    const media = await fetchMedia(ALBUM_ID);

    const urls = (media ?? []).map(({ baseUrl, mediaMetadata }) => {
      const { height, width } = mediaMetadata;
      return getRealImageUrl(baseUrl, width, height);
    });

    const generatedTimestamp = new Date().toISOString();

    const memories: Memory[] = [];

    const IMAGES_PER_SCRAPBOOK = 6;
    const SCRAPBOOK_PAGES = 2;

    const scrapbookMemories: Memory[] = [];
    for (let i = 0; i < SCRAPBOOK_PAGES; i++) {
      const images = urls
        .sort(() => 0.5 - Math.random())
        .slice(0, IMAGES_PER_SCRAPBOOK);
      scrapbookMemories.push({
        type: "scrapbook",
        images: images,
        title: "Some memories.",
      });
    }
    memories.push(...scrapbookMemories);

    let stats;
    if (!userId) {
      // return default collection
      stats = STATS;
    } else {
      // TODO: Fetch stats based on user data
      stats = STATS;
    }

    const { imageUrl } = await generateSocialStory(userId);

    const memoryCollection: MemoryCollection = {
      generated: generatedTimestamp,
      memories: memories,
      statistics: stats,
      recommendedShare: imageUrl,
    };
    return memoryCollection;
  } catch (error) {
    throw error;
  }
}

/**
 * Return a collection of memories
 *
 * @param req
 * @param res
 */
export default async function memoryHandler(
  req: NextApiRequest,
  res: NextApiResponse<MemoryCollection | APIError>
) {
  const { edition } = req.query; // TODO: Group wrapped entries by "edition" or week
  const { authorization } = req.headers;

  // Check if authentication was provided
  if (!authorization) {
    res.status(401).send(UNAUTHENTICATED_ERROR);
    return;
  }

  // Actually extract token
  const token = authorization.split(" ")[1];
  if (!token) {
    res.status(401).send(INVALID_TOKEN_ERROR);
    return;
  }
  console.debug(`Token: ${token}`);

  const { id } = await getDiscordInfo(token);
  const memoryCollection = await getMemories(id);

  res.status(200).json(memoryCollection);
}
