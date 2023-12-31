const Sidebar = ({}) => {
    return (
        <div className="sidebar-container">
            <h1 className="title">Nexus</h1>
            <div className="sidebar-contents">
                <h1 className="sidebar-header">Filter Items</h1>
                <div className="category">
                    <h1 className="category-name">Category #1</h1>
                    <div className="category-options-container">
                        <label htmlFor="options1">Option #1</label>
                        <input
                            type="checkbox"
                            name="options1"
                            id="options1"
                            className="category-options"
                        />
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
        </div>
    );
};

export default Sidebar;
