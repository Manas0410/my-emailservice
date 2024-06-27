import express, { Router } from "express";
import mailController from "./email.controller";

const mailRouter = express.Router();

mailRouter.post("/", mailController);

export default mailRouter;
