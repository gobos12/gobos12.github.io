import React from "react";
import {gameJams} from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";
import "./Game.scss";

export default function GameJams()
{
    if(!gameJams.display) return null;

    return (
      <div className="game-border" id="game-jams">
          <div className="game-section">
              <h1>{gameJams.header}</h1>
              <div className="game-list">
                  {
                      gameJams.games.map((card, i) => (
                          <ProjectCard key={i} card={card} />
                      ))
                  }
              </div>
          </div>
      </div>
    );
}