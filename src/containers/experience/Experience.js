import React from "react";
import {Fade} from "react-reveal";
import {experience} from "../../portfolio";
import ExpCard from "../../components/expCard/ExpCard";
import "./Experience.scss";

export default function Experience()
{
    if(!experience.display) return null;

    return(
      <div className="exp-border" id="exp">
          <Fade bottom duration={1000} distance="20px">
              <div className="exp-section">
                  <h1 className="exp-title">{experience.header}</h1>
                  <div className="exp-card-list">
                      {
                          experience.experience.map((card, i) => (
                              <ExpCard key={i} card={card} />
                          ))
                      }
                  </div>
              </div>
          </Fade>
      </div>
    );
}