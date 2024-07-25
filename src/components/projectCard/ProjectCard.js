import React from "react";
import "./ProjectCard.scss";
import Button from "../button/Button";

export default function ProjectCard({card})
{
    return (
      <div className="project-card">
          <div className="project-card-text">
              <h1>{card.title}</h1>
              <h2>{card.role}</h2>
              <div className="project-card-details">
                  <p>{card.description}</p>
                  <Button content={card.links}></Button>
              </div>
          </div>
      </div>
    );
}