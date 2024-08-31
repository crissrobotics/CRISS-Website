import React, { useState } from "react";
import styles from "./sponzcard.module.scss";

export default function SponzCard({ link, photo }) {

    return (
        <div className={styles.card}>
            <a href={link} target="_blank">
                <img src={photo}></img>
            </a>
        </div>
    );
}