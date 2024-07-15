import React from "react";
import Headroom from "react-headroom";
import {greeting} from "../../portfolio";
import "./Header.scss";

export default function Header()
{
    return(
        <Headroom>
            <header className="header">
                {/*<img src={greeting.logo} alt="Idle Robot" width="110" height="100"/>*/}
            </header>
        </Headroom>
    );
}