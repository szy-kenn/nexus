import React from "react";

const SearchBar = () => {
    return (
        <div className="search-bar">
            <input type="text" name="searchItem" id="searchItem" />
            <button type="button">Search</button>
        </div>
    );
};

export default SearchBar;
