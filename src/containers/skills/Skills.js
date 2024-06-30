import React from "react";
import "./Skills.scss";
import {Fade} from "react-reveal";
import {skills} from "../../details";
import SkillsCard from "../../components/skillsCard/SkillsCard";

export default function Skills()
{
    if(!skills.display) return null;

    return (
        <div className="skills" id="skills">
            <Fade bottom duration={1000} distance="20px">
                <div className="skills-section">
                    <div className="skills-text">
                        <h1 className="skills-title">{skills.title}</h1>
                        <p className="skills-subTitle">{skills.subTitle}</p>
                    </div>
                    <div className="skills-card">
                        {skills.skills.map((skill, i) =>
                            <SkillsCard key={i} skill={skill}/>
                        )}
                    </div>
                </div>
            </Fade>
        </div>
    );
}