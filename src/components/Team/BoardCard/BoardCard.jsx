import React from "react";
import "./boardcard.scss";

export default function BoardCard({name, team}) {

    return(
        <div className="boardCard">
            <div className="name">{name}</div>
            <div className="team">{team}</div>
        </div>
    )
}