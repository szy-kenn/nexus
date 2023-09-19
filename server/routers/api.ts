import { Request, Response, Router } from "express";
import { Error } from "mongoose";
import Nexus from "../models/nexus";

const router = Router();

router.get("/", async (_req: Request, res: Response) => {
    try {
        const allGameData = await Nexus.find();
        res.json(allGameData);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});

export default router;
