import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import { MechanicalTeam } from "../TeamData";

export default function Mechanical() {

    const batch2022 = MechanicalTeam.filter(data => data.batch === "2022");
    const batch2023 = MechanicalTeam.filter(data => data.batch === "2023");

    return (
        <div className="memberContainer">
            {/* <h6>Batch of 2022</h6>
            <div className="members">
                {batch2022.map(data => (
                    <TeamCard
                        key={data.id}
                        name={data.name}
                        profile={data.img}
                        position={data.position}
                        linkedin={data.linkedin}
                        github={data.github}
                        insta={data.insta}
                    />
                ))}
            </div> */}
            <h6>Batch of 2023</h6>
            <div className="members">
                {batch2023.map(data => (
                    <TeamCard
                        key={data.id}
                        name={data.name}
                        profile={data.img}
                        position={data.position}
                        linkedin={data.linkedin}
                        github={data.github}
                        insta={data.insta}
                    />
                ))}
            </div>
        </div>
    )
}