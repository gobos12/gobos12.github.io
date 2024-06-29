import React from "react";
import {Fade} from "react-reveal";
import {greeting} from "../../details";
import "./Greeting.scss";

export default function Greeting()
{
    if(!greeting.display) return null;

    return (
        <Fade bottom duration={1000} distance={"40px"}>
            <div className="greet-section" id="greeting">
                <div className="greet-gif">
                    <img src={require("./sitGif.gif")} alt="Idle Robot" width="500" height="550"/>
                </div>
                <div className="greet-text">
                    <h1 className="greet-title">{greeting.title}</h1>
                    <p className="greet-subTitle">{greeting.subTitle}</p>
                    <div className="greet-buttons">
                    </div>
                </div>
            </div>
        </Fade>
    );
}