import mongoose from "mongoose";

// DB에 자료를 저장할 때 어떤 형식으로 저장할 것인가..?
const videoSchema = new mongoose.Schema({
    // 영상 자체를 저장하는 것이 아닌 영상 URL을 따로 저장해둘 것임.
    fileUrl: {
        type: String,
        required: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    // 영상 조회수 같은 경우는 새로 만들어지면 View가 0 부터 시작 되도록 조정.
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});

const model = mongoose.model("Video", videoSchema);
export default model;
