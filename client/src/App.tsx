import { useState, useEffect, useRef } from "react";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import Card from "@components/Card";
import Header from "@components/Header";
import { hexToRgb, compareRgb } from "lib/global";
import { RGBColor, GameData } from "lib/types";
import Popup from "@components/Popup";
import Navbar from "@components/Navbar";
import { DEFAULT_THEME } from "lib/constants";

interface Props {
    data: GameData[];
}

const App = ({ data }: Props) => {
    const [gradientTheme, setGradientTheme] = useState<RGBColor>(
        hexToRgb(DEFAULT_THEME)
    );
    const [searchText, setSearchText] = useState("");
    const [clickedCard, setClickedCard] = useState<GameData>();

    const mainContainerRef = useRef<HTMLDivElement>(null);

    const handleClickedCard = (card: GameData | undefined) => {
        setClickedCard(card);

        mainContainerRef.current?.classList.toggle("darken");
    };

    return (
        <div
            className={
                "wrapper " +
                (compareRgb(gradientTheme, hexToRgb(DEFAULT_THEME))
                    ? ""
                    : "hovered")
            }
            style={
                {
                    "--gradient-color": [
                        gradientTheme.r,
                        gradientTheme.g,
                        gradientTheme.b,
                    ],
                } as React.CSSProperties
            }
        >
            <Popup
                clickedCard={clickedCard}
                onClickedCard={handleClickedCard}
                popupClassName={
                    "popup-card-clicked " + (clickedCard ? " displayed" : "")
                }
            />
            <Sidebar />
            <div className="main" ref={mainContainerRef}>
                <Navbar />
                <SearchBar
                    searchText={searchText}
                    onSearchChange={setSearchText}
                />
                <Header
                    title="Popular Games"
                    subtitle="Check out these titles!"
                />

                <div className="cards-container">
                    {data
                        .filter((game) =>
                            game.title.toLowerCase().includes(searchText.trim())
                        )
                        .map((game, idx) => (
                            <Card
                                key={idx}
                                imageUrl={game.imageUrl}
                                title={game.title}
                                price={game.price}
                                clickedColor={game.clickedColor}
                                onCardHover={setGradientTheme}
                                onCardClick={handleClickedCard}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default App;
