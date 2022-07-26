import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_PHOTOS_CLIENT_ID,
  process.env.GOOGLE_PHOTOS_CLIENT_SECRET,
  `${process.env.ROOT_DOMAIN}/api/auth`
);

export { oauth2Client };
