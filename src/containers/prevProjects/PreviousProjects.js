import React from "react";
import {Fade} from "react-reveal";
import {projects} from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./PreviousProjects.scss";

export default function PreviousProjects()
{
    if(!projects.display) return null;

    return (
        <div className="project-border" id="previous-projects">
            <div className="project-section">
                <h1>{projects.header}</h1>
                <div className="project-list">
                    {
                        projects.projects.map((card, i) => (
                           <ProjectCard key={i} card={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}