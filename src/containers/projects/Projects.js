import React from "react";
import {Fade} from "react-reveal";
import {projects} from "../../details";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./Projects.scss";

export default function Projects()
{
    if(!projects.display) return null;

    return (
        <div className="project-border" id="projects">
            <Fade bottom duration={1000} distance="20px">
                <div className="projects-section">
                    <h1 className="projects-title">{projects.header}</h1>
                    <div className="projects-card-list">
                        {
                            projects.projects.map((card, i) => (
                               <ProjectCard key={i} card={card} />
                            ))
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
}