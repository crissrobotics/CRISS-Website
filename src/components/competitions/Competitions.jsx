import React, { useState } from "react";
import styles from "./competitions.module.scss";
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import Header from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import TabButton from "../Team/TabButton/TabButton";
import IRC from "./IRC/IRC";
import ERC from "./ERC/ERC";
import IRDC from "./IRDC/IRDC";
import URC from "./URC/URC";
import UPCOMING from "./UPCOMING/UPCOMING";
import DropMenu from "./DropMenu/DropMenu";

export default function competitions(){

    const [selectedteam, setSelectedteam] = useState('irc');

    function handleSelect(selectedButton) {
        setSelectedteam(selectedButton);
    }

    
    return(
        <div>
             <Helmet>
                <title>Criss Robotics | Competitions</title>
                <meta name="description" content="The International Rover Design Challenge (IRDC) is an online space engineering design and research oriented competition organised by Mars Society South Asia." />
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <Header color="#00275B"></Header>
            
            <div class={styles.competitionsContainer}>
                <section>
                    <h2 className={styles.topHeading}>Compe<span>titons</span></h2>
                    <menu>
                        <TabButton isSelected={selectedteam === 'irc'} onSelect={() => handleSelect('irc')}>IRC</TabButton>
                        <TabButton isSelected={selectedteam === 'erc'} onSelect={() => handleSelect('erc')}>ERC</TabButton>
                        <TabButton isSelected={selectedteam === 'irdc'} onSelect={() => handleSelect('irdc')}>IRDC</TabButton>
                        <TabButton isSelected={selectedteam === 'urc'} onSelect={() => handleSelect('urc')}>URC</TabButton>
                        {/* <TabButton isSelected={selectedteam === 'upcoming'} onSelect={() => handleSelect('upcoming')}>UPCOMING</TabButton> */}
                    </menu>

                    <div className={styles.dropmenuContainer}>
                        <DropMenu selectedteam={selectedteam} handleSelect={handleSelect} />
                    </div>

                    <div>
                        {selectedteam === 'irc' && <IRC />}
                        {selectedteam === 'erc' && <ERC />}
                        {selectedteam === 'irdc' && <IRDC />}
                        {selectedteam === 'urc' && <URC />}
                        {/* {selectedteam === 'upcoming' && <UPCOMING />} */}
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}