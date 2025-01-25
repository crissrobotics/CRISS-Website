import React from "react";
import styles from "./infocontainer.module.scss";

export default function InfoContainer() {
    return(
        <div className={styles.infoContainer}>
            <h2>ABOUT IRC</h2>
            <p>Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.</p>
            <p>In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.</p>
            {/* <p></p> */}
        </div>
    )
}