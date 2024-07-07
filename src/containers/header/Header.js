import React, { useContext, useState } from "react";
import Headroom from "react-headroom";
import { Button } from "reactstrap";
import {
    greeting,
    skills,
    experience,
    projects,
    education,
    certs
} from "../../details";
import HeaderCard from "../../components/headerCard/HeaderCard";
import "./Header.scss";

function Header()
{
    const viewSkills = skills.display;
    const viewWork = experience.display;
    const viewProjects = projects.display;
    const viewEdu = education.display;
    const viewCerts = certs.display;

    const [isOpen, setOpen] = useState(false);

    return(
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <img src={greeting.logo} alt="Idle Robot" width="110" height="100"/>
                    <h1>{greeting.username}</h1>
                </a>
                <ul className="menu">
                    <Button
                        onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </Button>
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
            </header>
            <div className={isOpen ? "card-open" : "card-close"}>
                <HeaderCard />
            </div>
        </Headroom>
    );
}

export default Header;