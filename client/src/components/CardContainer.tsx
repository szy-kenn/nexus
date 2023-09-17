import { FetchedData, GameData, RGBColor } from "lib/types";
import Card from "./Card";

interface Props {
    fetchedData: FetchedData;
    searchText: string;
    handleCardHover: React.Dispatch<React.SetStateAction<RGBColor>>;
    handleClickedCard: (card: GameData | undefined) => void;
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
                        onCardHover={handleCardHover}
                        onCardClick={handleClickedCard}
                    />
                ))}
        </div>
    );
};

export default CardContainer;
