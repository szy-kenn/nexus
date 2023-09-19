import mongoose, { Schema } from "mongoose";
import IAnimeSchema from "../types/IAnimeSchema";

const animeSchema = new Schema<IAnimeSchema>({
    title: {
        type: String,
        required: true,
        minLength: 1,
    },
    episodes: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
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
        startDate: Date,
        endDate: {
            type: Date,
            validate: {
                validator: function (this: IAnimeSchema) {
                    return this.airingDate.startDate instanceof Date;
                },
                message: () =>
                    "endDate cannot be set without a startDate value.",
            },
        },
    },
    status: {
        type: String,
        default: function (this: IAnimeSchema) {
            if (!this.airingDate.startDate) {
                return "Not Aired Yet";
            } else if (!this.airingDate.endDate) {
                return "Airing";
            } else {
                return "Finished Airing";
            }
        },
    },
    imageUrl: {
        type: String,
        required: true,
    },
});

const Anime = mongoose.model("Nexus", animeSchema);
export default Anime;
