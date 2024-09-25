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
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const mailConfigurations_1 = require("../utils/mailConfigurations");
const mailController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tomail, bcc = "", subject, message, information } = req.body;
        // Serialize the information object (convert it to a string if necessary)
        const informationString = information
            ? JSON.stringify(information, null, 2)
            : "";
        // Append the serialized information to the message
        const fullMessage = `
      ${message}
      
      Additional Information:
      ${informationString}
    `;
        const mailOptions = {
            from: `Team MANAS <${config_1.senderMailAddress}>`,
            to: tomail,
            bcc: bcc,
            subject: subject,
            text: fullMessage,
            information: "",
        };
        yield (0, mailConfigurations_1.sendMail)(mailOptions);
        res.status(200).send("Email sent successfully!");
    }
    catch (error) {
        res.status(500).send(error === null || error === void 0 ? void 0 : error.message);
    }
});
exports.default = mailController;
