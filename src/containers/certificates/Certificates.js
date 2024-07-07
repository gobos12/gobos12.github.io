import React from "react";
import "./Certificates.scss";
import {Fade} from "react-reveal";
import {certs} from "../../details";

export default function Certificate() {
    if(!certs.display) return null;

    return (
        <div className="cert-border" id="cert">
            <Fade bottom duration={1000} distance="20px">
                <div className="cert-section">
                    <h1 className="cert-title">{certs.header}</h1>
                </div>
            </Fade>
        </div>
    );
}