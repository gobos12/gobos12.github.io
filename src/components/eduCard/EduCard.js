import React, {createRef} from "react";
import "./EduCard.scss";

export default function EduCard({card}) {
    const imgRef = createRef();

    return (
        <div className="edu-card">
            <div className="edu-card-img-div">
                {
                    card.logo && (
                        <div>
                            <img ref={imgRef} className="edu-card-img" src={card.logo} alt={card.school}/>
                        </div>
                    )
                }
            </div>
            <div className="edu-card-text">
                <h1 className="edu-card-name">{card.school}</h1>
                <div className="edu-card-details">
                    <h2 className="edu-card-degree">{card.degree}</h2>
                    <p className="edu-card-duration">{card.duration}</p>
                </div>
            </div>
        </div>
    );
}