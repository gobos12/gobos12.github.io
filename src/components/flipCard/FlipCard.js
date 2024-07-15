import React from "react";
import cn from "classnames";
import "./FlipCard.scss"

export default function FlipCard({card}) {
    return (
      <div className="flip-border">
          <div className={cn("flip-card", {"hover-trigger": "hover"})}>
              <div className="card front">
                  <div className="card body d-flex justify-content-center align-items-center">
                      <img src={card.logo} alt={card.name}/>
                  </div>
              </div>
              <div className="card back">
                  <div className="card body d-flex justify-content-center align-items-center">
                      <h1>{card.title}</h1>
                      <h2>{card.role}</h2>
                      <p>{card.description}</p>
                  </div>
              </div>
          </div>
      </div>
    );
}