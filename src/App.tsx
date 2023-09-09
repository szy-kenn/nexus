import React from "react";

const App = () => {
    return (
        <div className="wrapper">
            <div className="sidebar-container">
                <h1 className="sidebar-header">Sidebar Header</h1>
                <div className="category">
                    <h1 className="category-name">Category #1</h1>
                    <div className="category-options-container">
                        <div className="category-options">option 1</div>
                        <div className="category-options">option 2</div>
                        <div className="category-options">option 3</div>
                    </div>
                </div>
                <div className="category">
                    <h1 className="category-name">Category #1</h1>
                    <div className="category-options-container">
                        <div className="category-options">option 1</div>
                        <div className="category-options">option 2</div>
                        <div className="category-options">option 3</div>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className="search-bar">
                    <input type="text" name="searchItem" id="searchItem" />
                    <button type="button">Search</button>
                </div>
                <div className="cards-container">
                    <div className="card">Card</div>
                    <div className="card">Card</div>
                    <div className="card">Card</div>
                    <div className="card">Card</div>
                    <div className="card">Card</div>
                </div>
            </div>
        </div>
    );
};

export default App;
