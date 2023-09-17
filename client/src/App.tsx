import { useState, useEffect, useRef } from "react";
import Sidebar from "@components/Sidebar";
import SearchBar from "@components/SearchBar";
import Header from "@components/Header";
import { hexToRgb, compareRgb } from "lib/global";
import { RGBColor, GameData, FetchedData } from "lib/types";
import Popup from "@components/Popup";
import Navbar from "@components/Navbar";
import { DEFAULT_THEME } from "lib/constants";
import Spinner from "@components/Spinner";
import CardContainer from "@components/CardContainer";

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

        console.log(card);

        if (card === undefined) {
            mainContainerRef.current?.classList.remove("darken");
        } else {
            mainContainerRef.current?.classList.add("darken");
        }
    };

    const showFetchedData = () => {
        if (fetchedData.status === 0) {
            return <Spinner />;
        } else if (fetchedData.status === 200) {
            return (
                <CardContainer
                    fetchedData={fetchedData}
                    searchText={searchText}
                    handleCardHover={setGradientTheme}
                    handleClickedCard={handleClickedCard}
                />
            );
        }

        return <p className="fetch-error">{fetchedData.statusText}</p>;
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
