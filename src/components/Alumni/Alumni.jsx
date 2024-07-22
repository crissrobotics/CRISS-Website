import React from "react";
import "./alumni.scss";

import Navbar from "../Header/Navbar/Navbar";
import AlumniCard from "./AlumniCard/AlumniCard";
import Footer from "../Footer/Footer";
import { Alumnis } from "./alumniData";

export default function Alumni() {

    return (
        <>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main>
                <div className="alumniContainer">
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