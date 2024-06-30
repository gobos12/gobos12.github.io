import React from "react";
import "./Certificates.scss";
import {Fade} from "react-reveal";
import {certs} from "../../details";

export default function Certificate() {
    if(!certs.display) return null;

    return (
        <div className="cert" id="cert">
            <Fade bottom duration={1000} distance="20px">
                <div className="cert-section">
                    <div className="cert-title">
                        <h1>{certs.title}</h1>
                    </div>
                </div>
            </Fade>
        </div>
    );
}