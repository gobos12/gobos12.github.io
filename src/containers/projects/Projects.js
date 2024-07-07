import React from "react";
import "./Projects.scss";
import {Fade} from "react-reveal";
import {projects} from "../../details";
import Card from "../../components/card/Card";

export default function Projects()
{
    if(!projects.display) return null;

    return (
        <div className="project-border" id="projects">
            <Fade bottom duration={1000} distance="20px">
                <div className="projects-section">
                    <h1 className="projects-title">{projects.header}</h1>
                    <div className="projects-card">
                        {/*{projects.projects.map((card, i) => (*/}
                        {/*    <Card key={i} card={card}/>*/}
                        {/*))}*/}
                    </div>
                </div>
            </Fade>
        </div>
    );
}