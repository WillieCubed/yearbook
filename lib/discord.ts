/**
 * @see https://discord.com/developers/docs/resources/user#user-object
 */
type DiscordResult = {
  id: string;
  username: string;
  discriminator: string;
  avatar: string;
};

export async function getDiscordInfo(token: string) {
  const fetchResult = await fetch("https://discordapp.com/api/users/@me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const userDiscordInfo = (await fetchResult.json()) as DiscordResult;
  return userDiscordInfo;
}
