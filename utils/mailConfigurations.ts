import { google } from "googleapis";
import nodemailer from "nodemailer";
import {
  clientId,
  clientSecret,
  refreshToken,
  senderMailAddress,
} from "../config";

export interface MailOptions {
  from: string;
  to: string;
  bcc?: string;
  subject: string;
  text: string;
  information: any;
}

// Initialize OAuth2Client with your credentials
const oAuth2Client = new google.auth.OAuth2(clientId, clientSecret);

oAuth2Client.setCredentials({
  refresh_token: refreshToken,
});

// Create a transporter with OAuth2
const transporter = nodemailer.createTransport({
  // @ts-ignore
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: senderMailAddress,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

// Send mail function
export const sendMail = async (mailOptions: MailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error: any) {
    throw new Error(error);
  }
};
