import express from "express";
import { Request, Response } from "express";
import mailRouter from "./src/email.route";

(async (): Promise<void> => {
  try {
    const app = express();
    const port = 3000;

    app.use(express.json());
    app.use("/mail", mailRouter);

    app.get("/", (req: Request, res: Response) => {
      res.status(200).send("api is working");
    });

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err.message, "errp");
  }
})();
