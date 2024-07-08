import React from "react";
import {Fade} from "react-reveal";
import {certs} from "../../details";
import CertCard from "../../components/certCard/CertCard";
import "./Certificates.scss";

export default function Certificate() {
    if(!certs.display) return null;

    return (
        <div className="cert-border" id="cert">
            <Fade bottom duration={1000} distance="20px">
                <div className="cert-section">
                    <h1 className="cert-title">{certs.header}</h1>
                    <div className="cert-card-list">
                        {
                            certs.certs.map((card, i) => (
                                <CertCard key={i} card={card} />
                            ))
                        }
                    </div>
                </div>
            </Fade>
        </div>
    );
}