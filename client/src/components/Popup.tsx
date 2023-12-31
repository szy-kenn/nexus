import React from "react";
import IAnimeSchema from "@backend/IAnimeSchema";

interface Props {
    clickedCard: IAnimeSchema | undefined;
    onClickedCard: (clickedCardVal: IAnimeSchema | undefined) => void;
    popupClassName: string;
}

const Popup = ({ clickedCard, onClickedCard, popupClassName }: Props) => {
    const handleExit = () => {
        onClickedCard(undefined);
    };

    return (
        <div
            className={popupClassName}
            style={
                {
                    "--card-color": clickedCard?.clickedColor,
                } as React.CSSProperties
            }
        >
            <div className="content-container">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    onClick={handleExit}
                >
                    {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
                </svg>
                <div className="card-info">
                    <p className="card-info-title">{clickedCard?.title}</p>
                    <p className="card-info-price">{clickedCard?.episodes}</p>
                </div>
                <div className="popup-image-container">
                    <img
                        src={clickedCard?.imageUrl}
                        alt={clickedCard?.title}
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
};

export default Popup;
