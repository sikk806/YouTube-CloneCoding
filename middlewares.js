// multer : function을 넣으면 middleware가 file의 URL을 반환시켜줌.
import multer from "multer";
import routes from "./routes";

export const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};

// single : 웹 페이지에서 업로드를 눌렀을 때 오직 하나의 파일만 업로드 가능
// ' ' 안에는 upload에서 File의 이름이 들어오게 된다. (name='file')
export const uploadVideo = multerVideo.single("videoFile");
