const express = require("express");
const app = express();

const PORT = 3000;

const data = [
    {
        title: "League of Legends",
        price: "Free",
        clickedColor: "#FF2D54",
        imageUrl: "/assets/league-of-legends.jpg",
    },
    {
        title: "Valorant",
        price: "Free",
        clickedColor: "#fd4556",
        imageUrl: "/assets/valorant.jpg",
    },
    {
        title: "Genshin Impact",
        price: "Free",
        clickedColor: "#1455b4",
        imageUrl: "/assets/genshin-impact.jpg",
    },
    {
        title: "Starfield",
        price: "$69.99",
        clickedColor: "#304c7a",
        imageUrl: "/assets/starfield.jpg",
    },
    {
        title: "Dota 2",
        price: "Free",
        clickedColor: "#D94322",
        imageUrl: "/assets/dota2.jpg",
    },
    {
        title: "Grand Theft Auto 5",
        price: "$14.99",
        clickedColor: "#61B5CB",
        imageUrl: "/assets/gta-5.jpg",
    },
    {
        title: "Fortnite",
        price: "Free",
        clickedColor: "#6F659A",
        imageUrl: "/assets/fortnite.jpg",
    },
    {
        title: "Apex Legends",
        price: "Free",
        clickedColor: "#F80C14",
        imageUrl: "/assets/apex-legends.jpg",
    },
    {
        title: "Undertale",
        price: "$9.99",
        clickedColor: "#dddddd",
        imageUrl: "/assets/undertale.jpg",
    },
    {
        title: "Minecraft",
        price: "$8.99",
        clickedColor: "#637f40",
        imageUrl: "/assets/minecraft.jpg",
    },
    {
        title: "Red Dead Redemption 2",
        price: "$11.54",
        clickedColor: "#cb0512",
        imageUrl: "/assets/red-dead-redemption-2.jpg",
    },
    {
        title: "The Last Of Us",
        price: "$19.99",
        clickedColor: "#272f2e",
        imageUrl: "/assets/the-last-of-us.jpg",
    },
    {
        title: "Farlight 84",
        price: "Free",
        clickedColor: "#deb040",
        imageUrl: "/assets/farlight.jpg",
    },
    {
        title: "Counter Strike: Global Offensive",
        price: "Free",
        clickedColor: "#8e8677",
        imageUrl: "/assets/csgo.jpg",
    },
    {
        title: "Honkai Impact 3rd",
        price: "Free",
        clickedColor: "#e78e29",
        imageUrl: "/assets/honkai-impact-3rd.jpg",
    },
];

app.get("/api", (req, res) => {
    res.send(data);
});

app.listen(PORT, () => {
    console.log(`Listening at http:localhost:${PORT}`);
});
