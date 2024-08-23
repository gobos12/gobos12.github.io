import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import CurrentProjects from "../../containers/currProjects/CurrentProjects";
import PreviousProjects from "../../containers/prevProjects/PreviousProjects";
import GameJams from "../../containers/games/Game";
import "../../App.scss"
import Header from "../../containers/header/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="App-Sections">
                <Greeting/>
                <CurrentProjects/>
                <PreviousProjects/>
                <GameJams/>
            </div>
        </div>
    );
};

export default Home;