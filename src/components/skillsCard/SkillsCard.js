import React, {createRef} from "react";
import {skills} from "../../details";
import "./SkillsCard.scss";

export default function SkillsCard({card}){
    const imgRef = createRef();

    return (
        <div>
            <div className="skills-card">
                <ul className="skill-icons">
                    {
                        skills.skills.map((skills, i) => {
                            return (
                                <li key={i} className="skills-inline" title={skills.title}>

                                </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    );
}