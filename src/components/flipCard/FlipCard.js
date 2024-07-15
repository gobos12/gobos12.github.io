import React, {useState} from "react";
import cn from "classnames";
import "./FlipCard.scss"

export default function FlipCard({card}) {

    const [showBack, setShowBack] = useState(false);

    function handleClick() { setShowBack(!showBack) }


    return (
      <div className="flip-border" onClick={handleClick}>
          <div className={cn("flip-card", {showBack})}>
              <div className="card front">
                  <div className="card body d-flex justify-content-center align-items-center">
                      {/*<img src={card.logo} alt={card.name}/>*/}
                      <h1>{card.title}</h1>
                  </div>
              </div>
              <div className="card back">
                  <div className="card body d-flex justify-content-center align-items-center">
                      <h2>{card.role}</h2>
                      <p>{card.description}</p>
                  </div>
              </div>
          </div>
      </div>
    );
}