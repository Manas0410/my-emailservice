import "dotenv/config";

const { SENDER_EMAIL_ADDRESS, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } =
  process.env;

export const senderMailAddress = SENDER_EMAIL_ADDRESS;
export const clientId = CLIENT_ID;
export const clientSecret = CLIENT_SECRET;
export const refreshToken = REFRESH_TOKEN;
