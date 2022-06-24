// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MemoryCollection } from "../../lib/wrapped";

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
 * Return a collection of memories
 *
 * @param req
 * @param res
 */
export default function memoryHandler(
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

  // See if token is from a valid user

  const memoryCollection: MemoryCollection = {
    generated: new Date().toISOString(),
    memories: [],
    statistics: [],
    recommendedShare: "https://picsum.photos/1080/1920",
  };

  res.status(200).json(memoryCollection);
}
