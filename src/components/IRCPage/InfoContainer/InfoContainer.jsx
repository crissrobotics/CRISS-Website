import React from "react";
import styles from "./infocontainer.module.scss";

export default function InfoContainer({heading, para1, para2, para3, para4}) {
    return(
        <div className={styles.infoContainer}>
            <h2>{heading}</h2>
            <p>{para1}</p>
            <p>{para2}</p>
            <p style={{display: (para3 === "null") ? "none" : null}}>{para3}</p>
            <p style={{display: (para4 === "null") ? "none" : null}}>{para4}</p>
        </div>
    )
}