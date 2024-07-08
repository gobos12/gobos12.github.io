import React, { Component } from "react";
import "./HeaderCard.scss";
import {certs, education, experience, projects, skills} from "../../details";

export default function HeaderCard()
{

    return(
        <div className="header-card" id="header-card">
            <ul className="menu">
                {
                    experience.display && (
                        <li>
                            <a href="#exp">Experience</a>
                        </li>
                    )
                }
                {
                    education.display && (
                        <li>
                            <a href="#edu">Education</a>
                        </li>
                    )
                }
                {
                    projects.display && (
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                    )
                }
                {
                    certs.display && (
                        <li>
                            <a href="#cert">Certifications</a>
                        </li>
                    )
                }
                {
                    skills.display && (
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}