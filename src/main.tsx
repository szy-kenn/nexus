import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./sass/styles.scss";
import { GameData } from "global.ts";

const data: GameData[] = [
    {
        title: "League of Legends",
        price: "Free",
        clickedColor: "#FF2D54",
        imageUrl: "src/assets/league-of-legends.jpg",
    },
    {
        title: "Valorant",
        price: "Free",
        clickedColor: "#fd4556",
        imageUrl: "src/assets/valorant.jpg",
    },
    {
        title: "Genshin Impact",
        price: "Free",
        clickedColor: "#1455b4",
        imageUrl: "src/assets/genshin-impact.jpg",
    },
    {
        title: "Starfield",
        price: "$18.99",
        clickedColor: "#304c7a",
        imageUrl: "src/assets/starfield.jpg",
    },
    {
        title: "Dota 2",
        price: "Free",
        clickedColor: "#D94322",
        imageUrl: "src/assets/dota2.jpg",
    },
    {
        title: "Grand Theft Auto 5",
        price: "$14.49",
        clickedColor: "#61B5CB",
        imageUrl: "src/assets/gta-5.jpg",
    },
    {
        title: "Fortnite",
        price: "Free",
        clickedColor: "#6F659A",
        imageUrl: "src/assets/fortnite.jpg",
    },
    {
        title: "Apex Legends",
        price: "Free",
        clickedColor: "#F80C14",
        imageUrl: "src/assets/apex-legends.jpg",
    },
    {
        title: "Undertale",
        price: "$10.00",
        clickedColor: "#ffffff",
        imageUrl: "src/assets/undertale.jpg",
    },
    {
        title: "Minecraft",
        price: "$8.99",
        clickedColor: "#637f40",
        imageUrl: "src/assets/minecraft.jpg",
    },
    {
        title: "Red Dead Redemption 2",
        price: "$14.49",
        clickedColor: "#cb0512",
        imageUrl: "src/assets/red-dead-redemption-2.jpg",
    },
    {
        title: "The Last Of Us",
        price: "$21.49",
        clickedColor: "#272f2e",
        imageUrl: "src/assets/the-last-of-us.jpg",
    },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App data={data} />
    </React.StrictMode>
);
