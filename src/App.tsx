import { useState, useEffect } from "react";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import Card from "@components/Card";
import hexToRgb from "global";

const App = () => {
    const [gradientTheme, setGradientTheme] = useState(hexToRgb("#111111"));
    const [className, setClassName] = useState("wrapper");

    // useEffect(() => {
    //     console.log(`rgba(${gradientTheme.join(", ")}, 1)`);
    // }, [gradientTheme]);

    useEffect(() => {
        const [r, g, b] = hexToRgb("#111111");
        if (
            gradientTheme[0] !== r &&
            gradientTheme[1] !== g &&
            gradientTheme[2] !== b
        ) {
            setClassName("wrapper hovered");
        } else {
            setClassName("wrapper");
        }
    }, [gradientTheme]);

    return (
        <div
            className={className}
            style={
                {
                    "--gradient-color": `${gradientTheme}`,
                } as React.CSSProperties
            }
        >
            <Sidebar />
            <div className="main">
                <SearchBar />
                <div className="cards-container">
                    <Card
                        image_url="src/assets/league-of-legends.jpg"
                        title="League of Legends"
                        price="Free"
                        clickedColor={"#0397AB"}
                        onCardSelect={setGradientTheme}
                    />
                    <Card
                        image_url="src/assets/valorant.jpg"
                        title="Valorant"
                        price="Free"
                        clickedColor={"#fd4556"}
                        onCardSelect={setGradientTheme}
                    />
                    <Card
                        image_url="src/assets/genshin-impact.jpg"
                        title="Genshin Impact"
                        price="Free"
                        clickedColor={"#1455b4"}
                        onCardSelect={setGradientTheme}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
