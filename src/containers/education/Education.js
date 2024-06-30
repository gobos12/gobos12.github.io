import React from "react";
import "./Education.scss";
import {Fade} from "react-reveal";
import { education } from "../../details";
import EduCard from "../../components/eduCard/EduCard";

export default function Education()
{
    if (!education.display) return null;

    return (
      <div className="edu" id="edu">
          <Fade bottom duration={1000} distance="20px">
              <div className="edu-section">
                  <div className="edu-title">
                      <h1>{education.title}</h1>
                  </div>
                  <div className="edu-card">
                  {education.schools.map((school, index) => (
                          <EduCard key={index} school={school}/>
                      ))}
                  </div>
              </div>
          </Fade>
      </div>
    );
}