"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const email_controller_1 = __importDefault(require("./email.controller"));
const mailRouter = express_1.default.Router();
mailRouter.post("/", email_controller_1.default);
exports.default = mailRouter;
