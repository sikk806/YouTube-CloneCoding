import express from "express";
import routes from "../routes";
import { getUpload, postUpload, videoDetail, editVideo, deleteVideo } from "../controllers/videoControllers";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
// file을 Upload하면 server에 있는 folder('video/' in middleware.js)에 Upload
// postUpload는 해당 file로 접근하지만, file이 아닌 URL 형태로 접근하게 된다.
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;