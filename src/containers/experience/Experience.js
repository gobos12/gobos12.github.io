import React from "react";
import "./Experience.scss";
import {experience} from "../../details";

export default function Experience()
{
    if(!experience.display) return null;

    return(
      <div className="exp-section" id="exp">
          <h1 className="exp-header">{experience.title}</h1>
      </div>
    );
}