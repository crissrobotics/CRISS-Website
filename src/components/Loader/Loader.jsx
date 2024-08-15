import React from "react";
import styles from "./loader.module.scss";

export default function Loader() {

    return (
        <div className={styles.loader}>
            <div className={styles.spinner}></div>
            <p>Loading...</p>
        </div>
    )

};