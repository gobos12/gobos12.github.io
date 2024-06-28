import React from "react";
import "./Education.scss";
import {Fade} from "react-reveal";
import { education } from "../../details";

export default function Education()
{
    if (!education.display) return null;

    return (
      <div id="edu">
          <Fade bottom duration={1000} distance="20px">
              <div className="edu-section" id="education">
                  <h1 className="edu-title">{education.title}</h1>
              </div>
          </Fade>
      </div>
    );
}