import express from "express";

const videoRouter = express.Router();

const handleWarchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWarchVideo);

export default videoRouter;
