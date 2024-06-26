import React from "react";
import "./Education.scss";
import { education } from "../../details";

export default function Education()
{
    if (!education.display) return null;

    return (
      <div className="edu-section" id="edu">
          <h1 className={"edu-header"}>Education</h1>
      </div>
    );
}