import React, {createRef} from "react";
import "./EduCard.scss";
import {Fade} from "react-reveal";

export default function EduCard({school}) {
    const imgRef = createRef();

    return (
        <div className="edu-border">
            {
                school.logo && (
                    <div>
                        <img ref={imgRef} className="edu-img" src={school.logo} alt={school.name}/>
                    </div>
                )
            }
            <div className="edu-card">
                <div className="edu-text">
                    <h5 className="edu-name">{school.name}</h5>
                    <div className="edu-details">
                        <h6 className="edu-degree">{school.degree}</h6>
                        <p className="edu-duration">{school.duration}</p>
                        <p className="edu-gpa">{school.gpa}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}