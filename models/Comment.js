import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        // 어떤 ObjectID가 어느 model에서 왔는지 알려줌
        ref: "Video"
    }
});

const model = mongoose.model("Comment", commentSchema);