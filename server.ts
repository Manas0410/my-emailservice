import express from "express";
import mailRouter from "./src/email.route";
import cors from "cors";

(async () => {
  try {
    const app = express();
    const port = 3000;

    app.use(cors());

    app.use(express.json());
    app.use("/mail", mailRouter);

    app.get("/", (req, res) => {
      res.status(200).send("api is working");
    });

    app.listen(port, () => {
      console.log("app is running on http://localhost:3000");
    });
  } catch (err: any) {
    console.error(err.message, "errp");
  }
})();
