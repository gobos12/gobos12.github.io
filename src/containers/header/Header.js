import React, { useContext } from "react";
import Headroom from "react-headroom";
import {
    greeting,
    skills,
    workExperience,
    projects,
    education
} from "../../details";
import "./Header.scss";

function Header()
{
    const viewSkills = skills.display;
    const viewWork = workExperience.display;
    const viewProjects = projects.display;
    const viewEdu = education.display;

    return(
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <span className="logo-name">{greeting.username}</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn" style={{color:"black"}}>
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                    {
                        viewSkills && (
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        )
                    }
                    {
                        viewEdu && (
                            <li>
                                <a href="#education">Education</a>
                            </li>
                        )
                    }
                    {
                        viewWork && (
                            <li>
                                <a href="#experience">Experience</a>
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
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;