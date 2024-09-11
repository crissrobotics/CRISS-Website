import React from "react";
import styles from "./events.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import EventCrad from "./EventCard/EventCard";
import pic from "../../assets/images/Events/fifa.png";

export default function Events() {

    return (
        <>
            <Helmet>
                <title>Criss Robotics | Events</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main className={styles.main}>
                <h2>BOSM<span>'24</span></h2>
                <div className={styles.eventContainer}>
                    <EventCrad
                        eventImg={pic}
                        form=""
                    />
                    <EventCrad
                        eventImg={pic}
                        form=""
                    />
                    <EventCrad
                        eventImg={pic}
                        form=""
                    />
                </div>
            </main>
            <Footer />
        </>
    )
}