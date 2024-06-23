import React, { useContext } from "react";
import Headroom from "react-headroom";
import {
    greeting,
    skills
} from "../../details";
import "./Header.scss";

function Header()
{
    const viewSkills = skills.display;

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
                    )}
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;