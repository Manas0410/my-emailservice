import { Request, Response } from "express";
import { senderMailAddress } from "../config";
import { MailOptions, sendMail } from "../utils/mailConfigurations";

const mailController = async (req: Request, res: Response) => {
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

    const mailOptions: MailOptions = {
      from: `Team MANAS <${senderMailAddress}>`,
      to: tomail,
      bcc: bcc,
      subject: subject,
      text: fullMessage,
      information: "",
    };

    await sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error: any) {
    res.status(500).send(error?.message);
  }
};

export default mailController;
