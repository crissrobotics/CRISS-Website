import React from "react";
import { Helmet } from 'react-helmet';
import FacultyCard from "../FacultyCard/FacultyCard";
import FlippingCard1 from "../FlippingCard1/FlippingCard1";
import { FacultyTeam, FacultyLead } from "../TeamData";
import "./faculty.scss";

export default function Faculty() {


    return (
        <>
            <Helmet>
                <title>Criss Robotics | Mentors</title>
            </Helmet>
            <h3>Meet Our Mentors</h3>
            <div className="leadContainer">
                {FacultyLead.map(data => (
                    <FlippingCard1
                        key={data.id}
                        name={data.name}
                        profile={data.img}
                        position={data.position}
                        email={data.email}
                        website={data.website}
                        dept={data.dept}
                    />
                ))}
            </div>
            <br></br>
            <br></br>
            <div className="memberContainer">
                <div className="members">
                    {FacultyTeam.map(data => (
                        <FacultyCard
                            key={data.id}
                            name={data.name}
                            profile={data.img}
                            position={data.position}
                            email={data.email}
                            website={data.website}
                            dept={data.dept}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}