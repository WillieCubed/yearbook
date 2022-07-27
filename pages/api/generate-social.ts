// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

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

/**
 * Generates a collage of photos.
 *
 * @param userId Discord user ID. If this is null, only global memories will be returned.
 */
export async function generateSocialStory(
  userId: string | null
): Promise<SocialMediaResult> {
  try {
    // TODO: programmatically generate image
    return {
      imageUrl: "",
    };
  } catch (error) {
    throw error;
  }
}

type SocialMediaResult = {
  imageUrl: string;
};

/**
 * Return a collection of memories
 *
 * @param req
 * @param res
 */
export default async function generateSocialHandler(
  req: NextApiRequest,
  res: NextApiResponse<SocialMediaResult | APIError>
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

  // See if token is from a valid user

  const userId = "";

  const story = await generateSocialStory(userId);

  res.status(200).send(story);
}
