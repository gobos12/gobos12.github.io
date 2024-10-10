import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";
import "./Main.scss";
import Greeting from "./greeting/Greeting";
import LoadingScreen from "./loadingScreen/LoadingScreen";
import CurrentProjects from "./currProjects/CurrentProjects";
import PreviousProjects from "./prevProjects/PreviousProjects";
import GameJams from "./games/Game";

const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(
            () => setIsLoading(false), 2000
        );
        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
      <div className="Main">
          {isLoading ? (
            <LoadingScreen />
          ) : (
              <Fade bottom duration={1000} distance="40px">
                  <div className="App-Sections">
                      <Greeting />
                      <CurrentProjects/>
                      <PreviousProjects/>
                      <GameJams/>
                  </div>
              </Fade>
          )}
      </div>
    );
}

export default Main;