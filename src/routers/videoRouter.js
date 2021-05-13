import express from "express";
import {
  see,
  edit,
  upload,
  deleteVideo,
} from "../controllers/videodController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id/delete", deleteVideo);
videoRouter.get("/upload", upload);

export default videoRouter;
