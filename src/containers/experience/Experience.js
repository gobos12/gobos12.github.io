import React from "react";
import "./Experience.scss";
import {workExperience} from "../../details";

export default function Experience()
{
    if(!workExperience.display) return null;

    return(
      <div className={"exp-section"} id={"exp"}>
          <h1 className={"exp-header"}>Experience</h1>
      </div>
    );
}