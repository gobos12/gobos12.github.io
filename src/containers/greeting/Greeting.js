import React from "react";
import {greeting} from "../../portfolio";
import Button from "../../components/button/Button";
import "./Greeting.scss";

export default function Greeting()
{
    if(!greeting.display) return null;

    return (
        <div className="greet-border" id="greeting">
            <div className="greet-section">
                <div className="greet-text">
                    <h1>{greeting.name}</h1>
                    <h2>{greeting.subtitle}</h2>
                    <p>{greeting.aboutMe}</p>
                    <Button content={greeting.resources}></Button>
                </div>
                <div className="greet-headshot">
                    <img src={greeting.headshot} alt="me!" width="150" height="200"/>
                </div>
            </div>

        </div>
    );
}