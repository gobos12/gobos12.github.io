import React, {useState} from "react";
import cn from "classnames";
import "./FlipCard.scss"

export default function FlipCard({card}) {

    const [showBack, setShowBack] = useState(false);

    function handleClick() { setShowBack(!showBack) }


    return (
      <div className="flip-container" onClick={handleClick}>
          <div className={cn("flip-card", {showBack})}>
              <div className="card-front">
                  <div className="front-body">
                      <img src={card.logo} alt={card.name}/>
                      <h1>{card.title}</h1>
                  </div>
              </div>
              <div className="card-back">
                  <div className="back-body">
                      <h2>{card.role}</h2>
                      <p>{card.description}</p>
                  </div>
              </div>
          </div>
      </div>
    );
}