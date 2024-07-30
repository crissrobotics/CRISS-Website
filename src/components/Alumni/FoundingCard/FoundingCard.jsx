import React from "react";
import styles from "./foundingcard.module.scss";
import { motion } from "framer-motion";
import { HeadAnimation } from "../../Header/Motion/Motion";

export default function FoundingCard({ profile, name, linkedin,}) {

    return (
        <motion.div {...HeadAnimation("up", 0.1)} >
            <div className={styles.foundingCard}>
                <div className={styles.imgContainer}>
                    <img src={profile}></img>
                </div>
                <div className={styles.details}>
                    <div className={styles.name}>{name}</div>
                    <button>Know More</button>
                    {/* <div className={styles.social}>
                        <a href={linkedin} target="_blank" id={styles.linkedin} style={{ display: (linkedin === null) ? "none" : null }}><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z"></path></svg></a>
                    </div> */}
                </div>
            </div>
        </motion.div>
    )
}