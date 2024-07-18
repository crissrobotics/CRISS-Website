import React, { useState } from "react";
import "./team.scss";

import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import TabButton from "./TabButton/TabButton";

export default function Team() {

    const [selectedtopic, setselectedtopic] = useState("board");

    function handleSelect(selectedButton) {
        setselectedtopic(selectedButton);
    }

    return (
        <>
            <Navbar color="#00275B" />
            <main>
                <h2>The<span>Team</span></h2>
                <menu>
                    <TabButton isSelected={selectedtopic === 'board'} onSelect={() => handleSelect('board')}>The Board</TabButton>
                    <TabButton isSelected={selectedtopic === 'management'} onSelect={() => handleSelect('management')}>Management</TabButton>
                    <TabButton isSelected={selectedtopic === 'software'} onSelect={() => handleSelect('software')}>Software</TabButton>
                    <TabButton isSelected={selectedtopic === 'mechanical'} onSelect={() => handleSelect('mechanical')}>Mechanical</TabButton>
                    <TabButton isSelected={selectedtopic === 'electrical'} onSelect={() => handleSelect('electrical')}>Electrical</TabButton>
                    <TabButton isSelected={selectedtopic === 'payload'} onSelect={() => handleSelect('payload')}>Payload</TabButton>
                    <TabButton isSelected={selectedtopic === 'faculty'} onSelect={() => handleSelect('faculty')}>Faculty Advisor</TabButton>
                </menu>
            </main>
            <Footer />
        </>
    )
}