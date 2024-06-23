import React, { useContext } from "react";
import {greeting} from "./../../details";
import "./Greeting.scss";

export default function Greeting()
{
    if(!greeting.display) return null;

    return (
        <div className="greet-main" id="greeting">
            <div className="greeting-text">
                <h1 className="greeting-title">
                    {""} {greeting.title} {""}
                </h1>
            </div>
        </div>

    );
}