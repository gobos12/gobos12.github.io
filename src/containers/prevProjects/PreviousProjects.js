import React from "react";
import {projects} from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./PreviousProjects.scss";
import FlipCard from "../../components/flipCard/FlipCard";

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
                           <FlipCard key={i} card={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}