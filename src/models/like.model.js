import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        post:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts",
            required: true
        }
    },
    {
        timestamps: true
    }
)
export default mongoose.model("Like", likeSchema);