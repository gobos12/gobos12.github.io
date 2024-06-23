import React, { useContext } from "react";
import "./Skills.scss";
import skills from "./../../details";

export default function Skills()
{
    if(!skills.display) return null;

    return (
        <div className="skills" id="skills">
            <h1>{skills.title}{""}</h1>
            <p>{skills.subTitle}</p>
            <div className="skills-list">
                {skills.skills.map((skills, i) => {
                    return (
                        <p key={i}>{skills}</p>
                    );
                })}
            </div>
        </div>
    );
}