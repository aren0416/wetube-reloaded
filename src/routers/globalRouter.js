import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videodController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;
