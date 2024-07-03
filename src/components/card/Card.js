import React, {createRef} from "react";
import "./Card.scss";

export default function Card({card})
{
    const imgRef = createRef();

    const Bullets = ({bullets}) => {
        return bullets ? bullets.map((item, i) => (
            <li key={i} className="bullet">{item}</li>)) : null;
    };

    return (
        <div className="card">
            <div>
                <a className="button" href={card.link} target={"_blank"}>
                    {
                        (card.logo) && (
                            <div>
                                <img ref={imgRef} className="card-img" src={card.logo} alt={card.title}/>
                            </div>
                        )
                    }
                    <div className="card-text">
                        <h1 className="card-title">{card.title}</h1>
                        <h2 className="card-subtitle">{card.subTitle}</h2>
                        <div className="card-details">
                            <p className="card-date">{card.date}</p>
                            <p className="card-desc">{card.description}</p>
                            <ul>
                                <Bullets bullets={card.bullets}/>
                            </ul>
                        </div>
                    </div>
                </a>
            </div>

        </div>
    );
}