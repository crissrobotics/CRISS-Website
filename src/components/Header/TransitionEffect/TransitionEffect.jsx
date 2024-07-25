import React from "react";
import { motion } from "framer-motion";
import styles from "./TransitionEffect.module.scss";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className={styles.first}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
      />
      <motion.div
        className={styles.second}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.1, duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.third}
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.25, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;