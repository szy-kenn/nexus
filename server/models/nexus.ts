import mongoose from "mongoose";

const nexusSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    episodes: {
        type: Number,
        required: true,
    },
    studio: {
        type: String,
        required: true,
    },
    clickedColor: {
        type: String,
        required: true,
    },
    airingDate: {
        type: Date,
        required: false,
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Nexus = mongoose.model("Nexus", nexusSchema);
export default Nexus;
