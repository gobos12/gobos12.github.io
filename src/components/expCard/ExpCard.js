import React, {createRef} from "react";
import "./ExpCard.scss";

export default function ExpCard({card}){
    const imgRef = createRef()
    const DescBullets = ({descBullets}) => {
        return descBullets ? descBullets.map((item, i) => (
            <li key={i} className="exp-bullets">{item}</li> )) : null;
    };

    return(
        <div className="exp-border">
            {
                card.logo && (
                    <div>
                        <img ref={imgRef} className="exp-img" src={card.logo} alt={card.company}/>
                    </div>
                )
            }
            <div className="exp-card">
                <div className="exp-text">
                    <h5 className="exp-role">{card.role}</h5>
                    <div className="exp-details">
                        <h6 className="exp-company">{card.company}</h6>
                        <p className="exp-date">{card.date}</p>
                        <p className="exp-desc">{card.description}</p>
                        <ul>
                            <DescBullets descBullets={card.descBullets} />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}