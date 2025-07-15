import React from "react";
import styles from "./alumni.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import AlumniCard from "./AlumniCard/AlumniCard";
import Footer from "../Footer/Footer";
import {Alumnis22, Alumnis21, Alumnis20, FoundingMembers } from "./alumniData";
import FoundingCard from "./FoundingCard/FoundingCard";
import TabButton from "../Team/TabButton/TabButton";
import AlumniDropMenu from "./alumniDropMenu/alumniDropMenu";

import { useState } from "react";

export default function Alumni() {
    const [selectedBatch, setSelectedBatch] = useState('founders'); 

    function handleSelect(selectedButton) {
        setSelectedBatch(selectedButton);
    }


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
                    
                    <h2>The<span>Alumni</span></h2>
                    <menu>
                        <TabButton isSelected={selectedBatch === 'founders'} onSelect={() => setSelectedBatch('founders')}>Founders</TabButton>
                        <TabButton isSelected={selectedBatch === '2020'} onSelect={() => setSelectedBatch('2020')}>Batch of 2020</TabButton>
                        <TabButton isSelected={selectedBatch === '2021'} onSelect={() => setSelectedBatch('2021')}>Batch of 2021</TabButton>
                        <TabButton isSelected={selectedBatch === '2022'} onSelect={() => setSelectedBatch('2022')}>Batch of 2022</TabButton>
                    </menu>

                    <div className={styles.dropmenuContainer}>
                         <AlumniDropMenu selectedBatch={selectedBatch} handleSelect={setSelectedBatch} />
                    </div>

                    

                    
                    {selectedBatch === 'founders' && (
                     <>
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
                     </>
                    )}

                   {selectedBatch === '2022' && (
                     <>
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
                    </>
                   )}

                    {selectedBatch === '2021' && (
                    <>
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
                    </>
                    )}

                    {selectedBatch === '2020' && (
                     <>
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
                     </>
                    )}
                
                </div>
            </main>
            <Footer />
        </>
    );
}