import React, {createRef} from "react";
import "./CertCard.scss";

export default function CertCard({card})
{
    return (
      <div className="cert-card">
          <div className="cert-card-text">
              <h1 className="cert-cart-title">{card.title}</h1>
              <h2 className="cert-card-subtitle">{card.sponsor}</h2>
              <div className="cert-card-details">
                  <p className="cert-card-date">Date Awarded: {card.date}</p>
                  <p className="cert-card-desc">{card.description}</p>
              </div>
          </div>
      </div>
    );
}