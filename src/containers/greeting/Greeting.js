import React from "react";
import {Fade} from "react-reveal";
import {greeting} from "../../details";
import "./Greeting.scss";
import {Button} from "reactstrap";

export default function Greeting()
{
    if(!greeting.display) return null;

    return (
        <Fade bottom duration={1000} distance={"40px"}>
            <h1 className="greet-title">{greeting.name}</h1>
            <div className="greet-section" id="greeting">
                <div className="greet-text">
                    <p className="greet-subTitle">{greeting.subTitle}</p>
                </div>
                <div className="greet-buttons">
                    <Button>Resume</Button>
                </div>
            </div>
        </Fade>
    );
}