import React from "react";
import "./Experience.scss";
import {Fade} from "react-reveal";
import {experience} from "../../details";

export default function Experience()
{
    if(!experience.display) return null;

    return(
      <div id="exp">
          <Fade bottom duration={1000} distance="20px">
              <div className="exp-container" id="experience">
                  <h1 className="exp-title">{experience.title}</h1>
              </div>
          </Fade>
      </div>
    );
}