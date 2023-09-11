import React from "react";

const Sidebar = ({}) => {
    return (
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
    );
};

export default Sidebar;
