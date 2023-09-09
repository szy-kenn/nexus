import React from "react";
import MainContainer from "@components/MainContainer";
import Sidebar from "@components/Sidebar";

const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <MainContainer />
        </div>
    );
};

export default App;
