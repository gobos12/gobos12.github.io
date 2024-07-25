import React from "react";
import "./Button.scss"

export default function Button( {content} )
{
    return (
      <div className="button-border">
          {
              content.map((button, i) => {
                  return(
                      <div className="button" title={button.name}>
                          <a href={button.link} target="_blank">
                              <i className={button.logo}></i>
                          </a>
                      </div>
                  );
              })
          }
      </div>
    );
}