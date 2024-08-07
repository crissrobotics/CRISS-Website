import React from "react";
import "./alumni.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import AlumniCard from "./AlumniCard/AlumniCard";
import Footer from "../Footer/Footer";
import { Alumnis, FoundingMembers } from "./alumniData";
import FoundingCard from "./FoundingCard/FoundingCard";

export default function Alumni() {

    return (
        <>
            <Helmet>
                <title>Criss Robotics | Alumni</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main>
                <div className="alumniContainer">
                    <h6>Founding Members</h6>
                    <div className="members">
                        {FoundingMembers.map(data => (
                            <FoundingCard
                                key={data.id}
                                name={data.name}
                                profile={data.img}
                            />
                        ))}
                    </div>
                    <h6>Batch of 2021</h6>
                    <div className="members">
                        {Alumnis.map(data => (
                            <AlumniCard
                                key={data.id}
                                name={data.name}
                                profile={data.img}
                                position={data.position}
                                linkedin={data.linkedin}
                                team={data.team}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}