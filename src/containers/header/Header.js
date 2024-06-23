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
                <input className="menu-btn" />
                <ul className="menu">
                    {
                        viewSkills && (<li>
                            <a href="#skills">Skills</a>
                        </li>)
                    }
                </ul>
            </header>
        </Headroom>
    );
}

export default Header;