import React, {createRef} from "react";
import "./SkillsCard.scss";

export default function SkillsCard({skill}){
    const imgRef = createRef();

    return (
        <div className="skills-border">
            {
                skill.logo && (
                    <div>
                        <img ref={imgRef} className="skills-img" src={skill.logo} alt={skill.name}/>
                    </div>
                )
            }
            <div className="skills-card">
                <h5 className="skills-name">{skill.name}</h5>
            </div>
        </div>
    );
}