import { useState, useEffect, useRef } from "react";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import Card from "@components/Card";
import Header from "@components/Header";
import { hexToRgb, GameData } from "global.ts";
import Popup from "@components/Popup";

interface Props {
    data: GameData[];
}

const App = ({ data }: Props) => {
    const [gradientTheme, setGradientTheme] = useState(hexToRgb("#111111"));
    const [className, setClassName] = useState("wrapper");
    const [searchText, setSearchText] = useState("");
    const [clickedCard, setClickedCard] = useState<GameData>();
    const [popupClassName, setPopupClassName] = useState("popup-card-clicked");

    const mainContainerRef = useRef<HTMLDivElement>(null);

    const handleClickedCard = (clickedCardVal: GameData | undefined) => {
        setClickedCard(clickedCardVal);

        mainContainerRef.current?.classList.toggle("darken");

        if (mainContainerRef.current?.classList.contains("darken")) {
            setPopupClassName("popup-card-clicked displayed");
        } else {
            setPopupClassName("popup-card-clicked");
        }
    };

    // useEffect(() => {}, [clickedCard]);

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
            <Popup
                clickedCard={clickedCard}
                onClickedCard={handleClickedCard}
                popupClassName={popupClassName}
            />
            <Sidebar />
            <div className="main" ref={mainContainerRef}>
                <p className="title">
                    ne
                    <span
                        style={{
                            fontSize: "0.85em",
                            fontWeight: 300,
                            textAlign: "center",
                        }}
                    >
                        {"<x>"}
                    </span>
                    us
                </p>
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
