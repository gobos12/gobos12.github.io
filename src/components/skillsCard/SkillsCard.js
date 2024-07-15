import React, {createRef} from "react";
import {skills} from "../../portfolio";
import "./SkillsCard.scss";

export default function SkillsCard({card}){
    const imgRef = createRef();

    return (
        <div>
            <div className="skills-card">
                <ul className="skill-icons">
                    {
                        skills.softwareSkills.map((skill, i) => {
                            return (
                                <li key={i} className="skills-inline" title={skill.name}>
                                    <img ref={imgRef} className="skills-img" src={skill.logo} alt={skill.name}/>
                                    <p>{skill.name}</p>
                                </li>
                            );
                        })}
                </ul>
            </div>
        </div>
    );
}