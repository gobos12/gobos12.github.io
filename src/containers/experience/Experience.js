import React from "react";
import "./Experience.scss";
import {Fade} from "react-reveal";
import {experience} from "../../details";
import ExpCard from "../../components/_legacy/expCard/ExpCard";

export default function Experience()
{
    if(!experience.display) return null;

    return(
      <div className="exp-border" id="exp">
          <Fade bottom duration={1000} distance="20px">
              <div className="exp-section">
                  <h1 className="exp-title">{experience.header}</h1>
                  <div className="exp-card">
                      {/*{experience.experience.map((card, i) => (*/}
                      {/*    <Card key={i} card={card}/>*/}
                      {/*))}*/}
                  </div>
              </div>
          </Fade>
      </div>
    );
}