import { FetchedData, RGBColor } from "lib/types";
import IAnimeSchema from "@backend/IAnimeSchema";
import Card from "./Card";

interface Props {
    fetchedData: FetchedData;
    searchText: string;
    handleCardHover: React.Dispatch<React.SetStateAction<RGBColor>>;
    handleClickedCard: (card: IAnimeSchema | undefined) => void;
}

const CardContainer = ({
    fetchedData,
    searchText,
    handleCardHover,
    handleClickedCard,
}: Props) => {
    return (
        <div className="cards-container">
            {fetchedData.response
                .filter((anime) =>
                    anime.title.toLowerCase().includes(searchText.trim())
                )
                .map((anime, idx) => (
                    <Card
                        key={idx}
                        animeData={anime}
                        onCardHover={handleCardHover}
                        onCardClick={handleClickedCard}
                    />
                ))}
        </div>
    );
};

export default CardContainer;
