// import {videos} from "../db";
import routes from "../routes";
import Video from "../models/Video";

// async : JS를 기다리게 하는 것.
export const home = async(req, res) => {
    try{
    // DB의 모든 Video를 가져온다.
    // await는 async가 없으면 못쓴다.
    const videos = await Video.find({});
    // await가 끝나기 전까지는 render 진행하지 않음.
    res.render("Home", { pageTitle: "Home", videos });
    } 
    // catch가 없으면 Error를 잡지 못한다.
    catch(error) {
        console.log(error);
        res.render("Home", { pageTitle: "Home", videos });
    }
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