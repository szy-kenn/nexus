import IAnimeSchema from "@backend/IAnimeSchema";

export interface GameData {
    title: string;
    price: string;
    clickedColor: string;
    imageUrl: string;
}

export interface RGBColor {
    r: number;
    g: number;
    b: number;
}

export interface FetchedData {
    status: number;
    statusText: string;
    response: IAnimeSchema[];
}
