import { Request, Response, Router } from "express";
import { Error, HydratedDocument } from "mongoose";
import Anime from "../models/Anime";
import IAnimeSchema from "../types/IAnimeSchema";

const router = Router();

async function add() {
    try {
        const user: HydratedDocument<IAnimeSchema> = new Anime({
            title: 5,
            imageUrl: "dsada",
            clickedColor: "sadsad",
            studio: "std",
            type: "TV",
            airingDate: {
                startDate: new Date(),
                endDate: new Date(),
            },
            episodes: 5,
        });
        await user.save();
        console.log(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

router.get("/", async (_req: Request, res: Response) => {
    try {
        const allGameData = await Anime.find();
        res.json(allGameData);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});

export default router;
