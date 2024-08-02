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
import UPCOMING from "./UPCOMING/UPCOMING";

export default function competitions(){

    const [selectedteam, setSelectedteam] = useState('irc');

    function handleSelect(selectedButton) {
        setSelectedteam(selectedButton);
    }


    return(
        <>
             <Helmet>
                <title>Criss Robotics | Competitions</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <Header color="#00275B"></Header>
            
            <section>
                <h2 className={styles.topHeading}>Compe<span>titons</span></h2>
                <menu>
                    <TabButton isSelected={selectedteam === 'irc'} onSelect={() => handleSelect('irc')}>IRC</TabButton>
                    <TabButton isSelected={selectedteam === 'erc'} onSelect={() => handleSelect('erc')}>ERC</TabButton>
                    <TabButton isSelected={selectedteam === 'irdc'} onSelect={() => handleSelect('irdc')}>IRDC</TabButton>
                    <TabButton isSelected={selectedteam === 'upcoming'} onSelect={() => handleSelect('upcoming')}>UPCOMING</TabButton>
                </menu>

                <div>
                {selectedteam === 'irc' && <IRC />}
                {selectedteam === 'erc' && <ERC />}
                {selectedteam === 'irdc' && <IRDC />}
                {selectedteam === 'upcoming' && <UPCOMING />}
            </div>
            </section>
            <Footer></Footer>
        </>
    );
}