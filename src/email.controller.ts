import { Request, Response } from "express";
import { senderMailAddress } from "../config";
import { MailOptions, sendMail } from "../utils/mailConfigurations";

const mailController = async (req: Request, res: Response) => {
  try {
    const { tomail, bcc = "", subject, message, information } = req.body;

    const mailOptions: MailOptions = {
      from: `Team MANAS <${senderMailAddress}>`,
      to: tomail,
      bcc: bcc,
      subject: subject,
      text: message,
    };

    await sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error: any) {
    res.status(500).send(error?.message);
  }
};

export default mailController;
