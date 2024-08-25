import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements"

export default function Navbar()
{
    return(
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/home" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/projects" activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
}