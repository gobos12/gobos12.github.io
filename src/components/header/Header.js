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
                <h1>Hello i am Orion</h1>
            </header>
        </Headroom>
    );
}

export default Header;