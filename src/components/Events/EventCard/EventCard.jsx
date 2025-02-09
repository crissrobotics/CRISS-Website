import React from "react";
import styles from "./eventcard.module.scss";
import Tilt from 'react-parallax-tilt';

export default function EventCard({ eventImg, form, eventImg2}) {

    return (
        <>
            <Tilt>
                <div className={styles.card}>
                    <div className={styles.imgContainer}>
                        <img src={eventImg} ></img>
                    </div>
                    <button className={styles.registerButton}>
                        <a href={form} target="_blank">Register Now!</a>
                    </button>
                </div>
            </Tilt>
            <div className={styles.mobileCard}>
                <div className={styles.imgContainer}>
                    <img src={eventImg2} ></img>
                </div>
                <button className={styles.registerButton}>
                    <a href={form} target="_blank">Register Now!</a>
                </button>
            </div>
        </>
    )
}