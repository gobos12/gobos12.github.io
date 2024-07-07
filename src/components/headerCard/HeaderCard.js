import React from "react";
import {
    skills,
    experience,
    projects,
    education,
    certs
} from "../../details";
import "./HeaderCard.scss";
import {Button} from "reactstrap";

export default function HeaderCard()
{
    const viewSkills = skills.display;
    const viewWork = experience.display;
    const viewProjects = projects.display;
    const viewEdu = education.display;
    const viewCerts = certs.display;

    return(
        <div className="header-card" id="header-card">
            <div className="header-panel">
                <ul className="menu">
                    {
                        viewWork && (
                            <li>
                                <a href="#exp">Experience</a>
                            </li>
                        )
                    }
                    {
                        viewEdu && (
                            <li>
                                <a href="#edu">Education</a>
                            </li>
                        )
                    }
                    {
                        viewProjects && (
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                        )
                    }
                    {
                        viewCerts && (
                            <li>
                                <a href="#cert">Certifications</a>
                            </li>
                        )
                    }
                    {
                        viewSkills && (
                            <li>
                                <a href="#skills">Skills</a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}