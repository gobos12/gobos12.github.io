import React from "react";
import "./Projects.scss";
import {projects} from "../../details";

export default function Projects()
{
    if(!projects.display) return null;

    return (
        <div className={"projects-section"} id={"projects"}>
            <h1 className={"projects-header"}>{projects.title}</h1>
        </div>
    );
}