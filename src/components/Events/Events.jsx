import React from "react";
import styles from "./events.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import EventCard from "./EventCard/EventCard";
import fifa from "../../assets/images/Events/fifa.png";
import shuttle from "../../assets/images/Events/shuttle.png";
import bgmi from "../../assets/images/Events/bgmi.jpg";
import background from "../../assets/images/Events/backgro.png";
import logo from "../../assets/images/Events/bosmlogo.png";

export default function Events() {

    return (
        <>
            <Helmet>
                <title>Criss Robotics | Events</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="black" />
            </header>
            <main className={styles.main} style={{ backgroundImage: `url(${background})` }}>
                <img src={logo} className={styles.bosmlogo} ></img>
                {/* <h2><span>BOSM '24</span></h2> */}
                <div className={styles.eventContainer}>
                    <EventCard
                        eventImg={shuttle}
                        form="https://docs.google.com/forms/d/e/1FAIpQLSdigHGPHTDPRmBiatYWamBRLo_9lcrxUUvCBqcbmwnOzR4NLg/viewform"
                    />
                    <EventCard
                        eventImg={fifa}
                        form="https://forms.gle/jgGWzk2Nw52wp6969"

                    />
                    <EventCard
                        eventImg={bgmi}
                        form="https://docs.google.com/forms/d/e/1FAIpQLSd2m0-bjOJEGAiHiKCFBjWQeIcsrCEKONP3e2ABPLkKIF2dyg/viewform"
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}

//color="#00275B"