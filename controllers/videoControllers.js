// import {videos} from "../db";
import routes from "../routes";

export const home = (req, res) => {
    res.render("Home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
    const {query: { 
        term: searchingBy }} = req; // searchingBy = req.query.term
    res.render("Search", { pageTitle: "Search", searchingBy, videos }); // 이름이 같을땐 하나만 써도 됨.
};

export const getUpload = (req, res) => {
    res.render("Upload", { pageTitle: "Upload"});
};
export const postUpload = (req, res) => {
    const {
        body: {
            file, title, description
        }
    } = req;
    // To Do: Upload and save video
    res.redirect(routes.videoDetail('3333'));
};

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});