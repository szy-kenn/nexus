import React from "react";
import SearchBar from "./SearchBar";
import CardContainer from "./CardContainer";

const MainContainer = () => {
    return (
        <div className="main">
            <SearchBar />
            <CardContainer />
        </div>
    );
};

export default MainContainer;
