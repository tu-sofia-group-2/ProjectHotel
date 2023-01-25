import mongoose from "mongoose";
const ReeditionCodeSchema = new mongoose.Schema({
    username : {
        type: String,
        required: true,
    },
    verificationCode : {
        type: String,
        required: true,
    },
    validThrough : {
        type: Date,
        required: true
    },
    state : {
        type: String,
        required: true
    }
}, {timestamps: true});

export default mongoose.model("ReeditionCode", ReeditionCodeSchema);