import React from "react";
import {Fade} from "react-reveal";
import {greeting} from "../../details";
import Button from "../../components/button/Button.scss";
import "./Greeting.scss";

export default function Greeting()
{
    if(!greeting.display) return null;

    return (
        <Fade bottom duration={1000} distance={"40px"}>
            <div className="greet-main" id="greeting">
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