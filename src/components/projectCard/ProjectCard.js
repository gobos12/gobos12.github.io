import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({card})
{
    return (
      <div className="project-card">
          <div className="project-card-text">
              <h1 className="project-card-title">{card.title}</h1>
              <h2 className="project-card-subtitle">{card.sponsor}</h2>
              <div className="project-card-details">
                  <p className="project-card-description">{card.description}</p>
              </div>
          </div>
      </div>
    );
}