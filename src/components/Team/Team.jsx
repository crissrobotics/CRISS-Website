import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import "./team.scss";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import TabButton from "./TabButton/TabButton";
import DropMenu from "./DropMenu/DropMenu";
import Board from "./Board/Board";
import Management from "./Management/Management";
import Software from "./Software/Software"
import Mechanical from "./Mechanical/Mechanical";
import Electrical from "./Electrical/Electrical";
import Payload from "./Payload/Payload";
import Faculty from "./Faculty/Faculty";

export default function Team() {

    const [selectedteam, setSelectedteam] = useState('board');

    function handleSelect(selectedButton) {
        setSelectedteam(selectedButton);
    }

    // let filteredTeams;
    // let TeamComponent;

    // switch (selectedteam) {
    //     case 'faculty':
    //         filteredTeams = FacultyTeam;
    //         TeamComponent = FacultyCard;
    //         break;
    //     case 'board':
    //         filteredTeams = BoardTeam;
    //         TeamComponent = BoardCard;
    //         break;
    //     default:
    //         filteredTeams = Teams.filter(team => team.team === selectedteam);
    //         TeamComponent = TeamCard;
    //         break;
    // }

    // const batch2022 = filteredTeams.filter(data => data.batch === "2022");
    // const batch2023 = filteredTeams.filter(data => data.batch === "2023");

    return (
        <>
            <Helmet>
                <title>Criss Robotics | Team</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main>
                <h2>The<span>Team</span></h2>
                <menu>
                    <TabButton isSelected={selectedteam === 'board'} onSelect={() => handleSelect('board')}>The Board</TabButton>
                    <TabButton isSelected={selectedteam === 'management'} onSelect={() => handleSelect('management')}>Management</TabButton>
                    <TabButton isSelected={selectedteam === 'software'} onSelect={() => handleSelect('software')}>Software</TabButton>
                    <TabButton isSelected={selectedteam === 'mechanical'} onSelect={() => handleSelect('mechanical')}>Mechanical</TabButton>
                    <TabButton isSelected={selectedteam === 'electrical'} onSelect={() => handleSelect('electrical')}>Electrical</TabButton>
                    <TabButton isSelected={selectedteam === 'payload'} onSelect={() => handleSelect('payload')}>Payload</TabButton>
                    <TabButton isSelected={selectedteam === 'faculty'} onSelect={() => handleSelect('faculty')}>Faculty Advisor</TabButton>
                </menu>
                <div className="dropmenuContainer">
                    <DropMenu selectedteam={selectedteam} handleSelect={handleSelect} />
                </div>
                {/* <div className="memberContainer">
                    <h6 style={{ display: TeamComponent === TeamCard ? null : "none" }}>Batch of 2022</h6>
                    <div className="members">
                        {batch2022.map(data => (
                            <TeamComponent
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
                    <br></br>
                    <br></br>
                    <h6 style={{ display: TeamComponent === TeamCard ? null : "none" }}>Batch of 2023</h6>
                    <div className="members">
                        {batch2023.map(data => (
                            <TeamComponent
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

                </div> */}
                <div>
                    {selectedteam === 'board' && <Board />}
                    {selectedteam === 'management' && <Management />}
                    {selectedteam === 'software' && <Software />}
                    {selectedteam === 'mechanical' && <Mechanical />}
                    {selectedteam === 'electrical' && <Electrical />}
                    {selectedteam === 'payload' && <Payload />}
                    {selectedteam === 'faculty' && <Faculty />}
                </div>
            </main>
            <Footer />
        </>
    );
}
