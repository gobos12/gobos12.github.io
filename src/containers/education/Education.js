import React from "react";
import "./Education.scss";
import {Fade} from "react-reveal";
import { education } from "../../portfolio";
import EduCard from "../../components/eduCard/EduCard";

export default function Education()
{
    if (!education.display) return null;

    return (
      <div className="edu-border" id="edu">
          <Fade bottom duration={1000} distance="20px">
              <div className="edu-section">
                  <h1 className="edu-title">{education.header}</h1>
                  <div className="edu-card-list">
                      {
                          education.schools.map((card, i) => (
                              <EduCard key={i} card={card} />
                          ))
                      }
                  </div>
              </div>
          </Fade>
      </div>
    );
}