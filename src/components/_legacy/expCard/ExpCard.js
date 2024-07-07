import React, {createRef} from "react";
import "./ExpCard.scss";

export default function ExpCard({card}){
    const imgRef = createRef()
    const DescBullets = ({descBullets}) => {
        return descBullets ? descBullets.map((item, i) => (
            <li key={i} className="exp-bullets">{item}</li> )) : null;
    };

    return(
        <div className="exp-border">

        </div>
    );
}