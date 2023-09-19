import { Request, Response, Router } from "express";
import { Error, HydratedDocument } from "mongoose";
import Anime from "../models/Anime";
import IAnimeSchema from "../types/IAnimeSchema";

const router = Router();

async function add() {
    try {
        const user: HydratedDocument<IAnimeSchema> = new Anime({
            title: "Steins;Gate",
            imageUrl: "/assets/steins-gate.jpg",
            clickedColor: "#3f405f",
            studio: "White Fox",
            type: "TV",
            airingDate: {
                startDate: (() => {
                    const date = new Date();
                    date.setFullYear(2011, 4, 6);
                    return date;
                })(),
                endDate: (() => {
                    const date = new Date();
                    date.setFullYear(2011, 9, 14);
                    return date;
                })(),
            },
            episodes: 24,
        });
        await user.save();
        console.log(user);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

// add();

async function del() {
    await Anime.deleteMany();
}

// del();

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
