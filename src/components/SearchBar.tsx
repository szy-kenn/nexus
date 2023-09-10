import { useEffect, useRef } from "react";

interface Props {
    searchText: string;
    onSearchChange: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ searchText, onSearchChange }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleInputFocus = () => {
        ref.current?.classList.add("focused");
    };

    const handleInputBlur = () => {
        ref.current?.classList.remove("focused");
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    return (
        <div className="search-bar" ref={ref}>
            <input
                type="text"
                name="searchItem"
                id="searchItem"
                className="search-item"
                placeholder="Search Game"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleChange}
                value={searchText}
            />
            <button type="button" className="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    {/* <!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
