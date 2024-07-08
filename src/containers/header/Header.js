import React, {useState} from "react";
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

function openMenu() {

}

function closeMenu() {

}

function Header()
{
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        if (isOpen) {
            document.getElementById("header-card").style.width = "0"; // close menu
            setOpen(false);
        } else {
            document.getElementById("header-card").style.width = "250px"; //open menu
            setOpen(true);
        }
    };

    return(
        <Headroom>
            <header className="header">
                <a href="/" className="logo">
                    <img src={greeting.logo} alt="Idle Robot" width="110" height="100"/>
                    <h1>{greeting.username}</h1>
                </a>
                <Button className="header-button" onClick={handleClick}>
                    <i className="fa-solid fa-bars"></i>
                </Button>
                <HeaderCard />
            </header>
        </Headroom>
    );
}

export default Header;