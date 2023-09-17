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
import Spinner from "@components/Spinner";

interface FetchedData {
    status: number;
    statusText: string;
    response: GameData[];
}

const App = () => {
    const [gradientTheme, setGradientTheme] = useState<RGBColor>(
        hexToRgb(DEFAULT_THEME)
    );
    const [searchText, setSearchText] = useState("");
    const [clickedCard, setClickedCard] = useState<GameData>();
    const [fetchedData, setFetchedData] = useState<FetchedData>({
        status: 0,
        statusText: "",
        response: [],
    });

    const mainContainerRef = useRef<HTMLDivElement>(null);

    const handleClickedCard = (card: GameData | undefined) => {
        setClickedCard(card);

        mainContainerRef.current?.classList.toggle("darken");
    };

    const showFetchedData = () => {
        if (fetchedData.status === 0) {
            return <Spinner />;
        } else if (fetchedData.status === 200) {
            return (
                <div className="cards-container">
                    {fetchedData.response
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
            );
        } else {
            return <p className="fetch-error">{fetchedData.statusText}</p>;
        }
    };

    useEffect(() => {
        fetch("/api")
            .then((res) => {
                setFetchedData((prev) => ({
                    ...prev,
                    status: res.status,
                    statusText: res.statusText,
                }));
                return res.json();
            })
            .then((data) => {
                setFetchedData((prev) => ({ ...prev, response: data }));
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

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
                {showFetchedData()}
            </div>
        </div>
    );
};

export default App;
