import React from "react";
import "./Skills.scss";
import {Fade} from "react-reveal";
import {skills} from "../../details";

export default function Skills()
{
    if(!skills.display) return null;

    return (
        <div id="skills">
            <Fade bottom duration={1000} distance="20px">
                <div className="skills-section">
                    <h1 className="skills-title">{skills.title}</h1>
                </div>
            </Fade>
        </div>
    );
}