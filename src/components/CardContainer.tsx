import React from "react";
import Card from "./Card";

const CardContainer = () => {
    return (
        <div className="cards-container">
            <Card
                image_url="src\assets\league-of-legends.jpg"
                title="League of Legends"
                price="Free"
            />
            <Card
                image_url="src\assets\valorant.jpg"
                title="Valorant"
                price="Free"
            />
            <Card
                image_url="src\assets\genshin-impact.jpg"
                title="Genshin Impact"
                price="Free"
            />
            <Card
                image_url="src\assets\csgo.jpg"
                title="Counter Strike: Global Offensive"
                price="Free"
            />
            <Card
                image_url="src\assets\dota2.jpg"
                title="Dota 2"
                price="Free"
            />
            <Card
                image_url="src\assets\fortnite.jpg"
                title="Fortnite"
                price="Free"
            />
            <Card
                image_url="src\assets\minecraft.jpg"
                title="Minecraft"
                price="$8.99"
            />
            <Card
                image_url="src\assets\starfield.jpg"
                title="Starfield"
                price="$18.99"
            />
            <Card
                image_url="src\assets\gta-5.jpg"
                title="Grand Theft Auto V"
                price="$9.49"
            />
            <Card
                image_url="src\assets\farlight.jpg"
                title="Farlight 84"
                price="Free"
            />
            <Card
                image_url="src\assets\apex-legends.jpg"
                title="Apex Legends"
                price="Free"
            />
            <Card
                image_url="src\assets\red-dead-redemption-2.jpg"
                title="Red Dead Redemption 2"
                price="$8.49"
            />
        </div>
    );
};

export default CardContainer;
