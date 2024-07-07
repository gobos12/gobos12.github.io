import React, { useContext } from "react";
import Headroom from "react-headroom";
import {
    greeting,
    skills,
    experience,
    projects,
    education
} from "../../details";
import HeaderCard from "../../components/headerCard/HeaderCard";
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
                    <img src={greeting.logo} alt="Idle Robot" width="110" height="100"/>
                    <h1>{greeting.username}</h1>
                </a>
                <ul className="menu">
                    <button className="header-button" type="button">
                        <i className="fa-solid fa-bars"></i>
                    </button>
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
            <div className="card">
                <HeaderCard />
            </div>
        </Headroom>
    );
}

export default Header;