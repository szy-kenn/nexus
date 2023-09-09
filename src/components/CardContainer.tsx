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
        </div>
    );
};

export default CardContainer;
