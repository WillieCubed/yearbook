import type { NextApiRequest, NextApiResponse } from "next";
import { ParsedUrlQuery } from "querystring";
import { parse } from "url";
import { TokensData } from "../../lib/auth";
import { oauth2Client } from "../../lib/server/server-auth";
import { supabase } from "../../lib/supabase-client";

type APIError = {
  type: string;
  message: string;
};

const UNKNOWN_ERROR: APIError = {
  type: "unknown",
  message: "The server cannot complete your request due to an unknown reason.",
};

/**
 * Handle authentication issues.
 *
 * @param req
 * @param res
 */
export default async function memoryHandler(
  req: NextApiRequest,
  res: NextApiResponse<TokensData | APIError>
) {
  if (!req.url) {
    res.status(400).end();
    return;
  }

  try {
    const { code } = parse(req.url, true)!.query as ParsedUrlQuery;
    const { tokens } = await oauth2Client.getToken(code as string);
    const tokensData = {
      access_token: tokens.access_token,
      refresh_token: tokens.refresh_token,
      expiry_date: tokens.expiry_date,
    } as TokensData; // These values should always be defined

    const { error } = await supabase
      .from("service_google_auth_tokens")
      .upsert([{ id: "default", ...tokensData }]);
    if (error) {
      throw error;
    }
    // TODO: Actually adopt a sane approach that doesn't always redirect to admin.

    const params = new URLSearchParams(tokensData as any); // TODO: Fix obvious code smell
    const rawQuery = params.toString();

    res.redirect(`/admin?${rawQuery}`).status(301);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send(UNKNOWN_ERROR);
    return;
  }
}
