import React from "react";
import styles from  "../IRC2023/IRC2023.module.scss";
import aboutPic from "../../../assets/images/Competitions/IRDC23PHOTO.png";

export default function IRDC2023() {

    return (
        <div className={styles.The2023Container}>
            <h2>IRDC<span>2023</span></h2>
            <div className={styles.details}>
                <div className={styles.imgContainer}><img src={aboutPic}></img></div>
                <p>The <span>International Rover Design Challenge (IRDC)</span> is an annual competition where university students worldwide design, build, and operate <span>Mars rovers</span>. Participants gain practical experience in problem-solving, teamwork, and project management while advancing space exploration technology. Teams must meticulously plan each rover subsystem, considering <span>extraterrestrial conditions</span> and operational constraints. The competition is a platform for students to unleash their creativity and design groundbreaking solutions within practical limits.</p>
            </div>
        </div>
    )
}