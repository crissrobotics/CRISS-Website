import React from "react";
import styles from "./developer.module.scss";
import { Helmet } from 'react-helmet';

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Footer from "../Footer/Footer";
import DevCard from "./DevCard/DevCard";
import { Developers } from "./DevData";

export default function Developer() {

    return (
        <>
            <Helmet>
                <title>Criss Robotics | Developers</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main className={styles.mainContainer}>
                <div className={styles.devContainer}>
                    <h6>Meet the Developers</h6>
                    <div className={styles.devmembers}>
                        {Developers.map(data => (
                            <DevCard
                                key={data.id}
                                name={data.name}
                                profile={data.img}
                                dev={data.dev}
                                linkedin={data.linkedin}
                                github={data.github}
                                insta={data.insta}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}