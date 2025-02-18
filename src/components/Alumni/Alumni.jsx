import React from "react";
import styles from "./alumni.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import AlumniCard from "./AlumniCard/AlumniCard";
import Footer from "../Footer/Footer";
import {Alumnis22, Alumnis21, Alumnis20, FoundingMembers } from "./alumniData";
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
            <main className={styles.mainContainer}>
                <div className={styles.alumniContainer}>
                    <h6>Founding Members</h6>
                    <div className={styles.members}>
                        {FoundingMembers.map(data => (
                         <FoundingCard
                                key={data.id}
                                name={data.name}
                                profile={data.img}
                                para1={data.para1}
                                para2={data.para2}
                                para3={data.para3}
                                para4={data.para4}
                                para5={data.para5}
                                linkedin={data.linkedin}
                            />
                        ))}
                    </div>

                    <h6>Batch of 2022</h6>
                    <div className={styles.members}>
                        {Alumnis22.map(data => (
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

                    <h6>Batch of 2021</h6>
                    <div className={styles.members}>
                        {Alumnis21.map(data => (
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

                    <h6>Batch of 2020</h6>
                    <div className={styles.members}>
                        {Alumnis20.map(data => (
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