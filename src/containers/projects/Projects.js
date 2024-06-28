import React from "react";
import "./Projects.scss";
import {Fade} from "react-reveal";
import {projects} from "../../details";

export default function Projects()
{
    if(!projects.display) return null;

    return (
        <div id="projects">
            <Fade bottom duration={1000} distance="20px">
                <div className="projects-section">
                    <h1 className="projects-title">{projects.title}</h1>
                </div>
            </Fade>
        </div>
    );
}