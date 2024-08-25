import React from "react";
import Greeting from "../../containers/greeting/Greeting";

import "../../App.scss";
import Header from "../../containers/header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="App-Sections">
                <Greeting/>
            </div>
        </div>
    );
};

export default Home;