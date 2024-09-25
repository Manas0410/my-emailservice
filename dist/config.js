"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.clientSecret = exports.clientId = exports.senderMailAddress = void 0;
require("dotenv/config");
const { SENDER_EMAIL_ADDRESS, CLIENT_ID, CLIENT_SECRET, REFRESH_TOKEN } = process.env;
exports.senderMailAddress = SENDER_EMAIL_ADDRESS;
exports.clientId = CLIENT_ID;
exports.clientSecret = CLIENT_SECRET;
exports.refreshToken = REFRESH_TOKEN;
