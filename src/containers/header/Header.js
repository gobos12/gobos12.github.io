import React, { useContext } from "react";
import Headroom from "react-headroom";
import {
    greeting,
    skills,
    experience,
    projects,
    education
} from "../../details";
import "./Header.scss";

function Header()
{
    const viewSkills = skills.display;
    const viewWork = experience.display;
    const viewProjects = projects.display;
    const viewEdu = education.display;

    return(
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <span className="logo-name">{greeting.username}</span>
                </a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn" style={{color:"white"}}>
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
                                <a href="#edu">Education</a>
                            </li>
                        )
                    }
                    {
                        viewWork && (
                            <li>
                                <a href="#exp">Experience</a>
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