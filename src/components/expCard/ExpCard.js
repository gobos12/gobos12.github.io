import React, {createRef} from "react";
import "./ExpCard.scss";

export default function ExpCard({card}){
    const imgRef = createRef()

    return(
        <div className="exp-card">
            <a className="exp-card-button" href={card.link} target="_blank" rel="noreferrer">
                {
                    card.logo &&
                    (
                        <div>
                            <img className="exp-card-img" ref={imgRef} src={card.logo} alt={card.title}/>
                        </div>
                    )
                }
            </a>
            <div className="exp-card-text">
                <h1 className="exp-card-title">{card.title}</h1>
                <h2 className="exp-card-subtitle">{card.company}</h2>
                <div className="exp-card-details">
                    <p className="exp-card-duration">{card.duration}</p>
                    <p className="exp-card-desc">{card.description}</p>
                </div>
            </div>
        </div>
    );
}