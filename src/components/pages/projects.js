import React from "react";
import CurrentProjects from "../../containers/currProjects/CurrentProjects";
import PreviousProjects from "../../containers/prevProjects/PreviousProjects";
import GameJams from "../../containers/games/Game";
import "../../App.scss";

const Projects = () => {
    return(
        <div>
            <div className="App-Sections">
                <CurrentProjects/>
                <PreviousProjects/>
                <GameJams/>
            </div>
        </div>
    );
}

export default Projects;