"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = void 0;
const googleapis_1 = require("googleapis");
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = require("../config");
// Initialize OAuth2Client with your credentials
const oAuth2Client = new googleapis_1.google.auth.OAuth2(config_1.clientId, config_1.clientSecret);
oAuth2Client.setCredentials({
    refresh_token: config_1.refreshToken,
});
// Create a transporter with OAuth2
const transporter = nodemailer_1.default.createTransport({
    // @ts-ignore
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: config_1.senderMailAddress,
        clientId: config_1.clientId,
        clientSecret: config_1.clientSecret,
        refreshToken: config_1.refreshToken,
        accessToken: oAuth2Client.getAccessToken(),
    },
});
// Send mail function
const sendMail = (mailOptions) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield transporter.sendMail(mailOptions);
        console.log("Email sent successfully!");
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.sendMail = sendMail;
