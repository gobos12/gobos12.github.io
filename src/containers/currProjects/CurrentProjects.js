import React from "react";
import {currentDev, projects} from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";
import FlipCard from "../../components/flipCard/FlipCard";

export default function CurrentProjects()
{
    if(!currentDev.display) return null;

    return (
      <div className="project-border" id="current-projects">
        <div className="project-section">
            <h1>{currentDev.header}</h1>
            <div className="project-list">
                {
                    currentDev.projects.map((card, i) => (
                        <ProjectCard key={i} card={card} />
                    ))
                }
            </div>
        </div>
      </div>
    );
}