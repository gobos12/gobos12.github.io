import React from "react";
import "./Experience.scss";
import {Fade} from "react-reveal";
import {experience} from "../../details";
import ExpCard from "../../components/_legacy/expCard/ExpCard";
import Card from "../../components/card/Card";

export default function Experience()
{
    if(!experience.display) return null;

    return(
      <div className="exp" id="exp">
          <Fade bottom duration={1000} distance="20px">
              <div className="exp-section">
                  <div className="exp-title">
                      <h1>{experience.title}</h1>
                  </div>
                  <div className="exp-card">
                  {experience.experience.map((card, i) => (
                      <Card key={i} card={card}/>
                  ))}
                  </div>
              </div>
          </Fade>
      </div>
    );
}