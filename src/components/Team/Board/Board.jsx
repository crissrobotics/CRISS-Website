import React from "react";
import "./board.scss";
import FlippingCard from "../FlippingCard/FlippinCard";
import BoardCard from "../BoardCard/BoardCard";
import { BoardLead, BoardTeam } from "../TeamData";

export default function Board() {

    const management = BoardTeam.filter(data => data.team === "management");
    const tech = BoardTeam.filter(data => data.team === "tech");

    return (
        <>
            <div className="leadContainer">
                {BoardLead.map(data => (
                    <FlippingCard
                        key={data.id}
                        name={data.name}
                        profile={data.img}
                        position1={data.position1}
                        position2={data.position2}
                        position3={data.position3}
                        linkedin={data.linkedin}
                        github={data.github}
                        insta={data.insta}
                    />
                ))}
            </div>
            <div className="memberContainer">
                <h6>Management Board</h6>
                <div className="members">
                    {management.map(data => (
                        <BoardCard
                            key={data.id}
                            name={data.name}
                            profile={data.img}
                            position1={data.position1}
                            position2={data.position2}
                            position3={data.position3}
                            linkedin={data.linkedin}
                            github={data.github}
                            insta={data.insta}
                        />
                    ))}
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h6>Tech Board</h6>
                <div className="members">
                    {tech.map(data => (
                        <BoardCard
                            key={data.id}
                            name={data.name}
                            profile={data.img}
                            position1={data.position1}
                            position2={data.position2}
                            position3={data.position3}
                            linkedin={data.linkedin}
                            github={data.github}
                            insta={data.insta}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}