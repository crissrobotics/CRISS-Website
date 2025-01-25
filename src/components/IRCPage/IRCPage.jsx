import React from "react";
import styles from "./ircpage.module.scss";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { HeadAnimation } from "../Header/Motion/Motion.jsx";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import IRC from "../competitions/IRC/IRC.jsx";
import Footer from "../Footer/Footer";
import InfoContainer from "./InfoContainer/InfoContainer.jsx";

const infoData = [
  {
    heading: "ABOUT IRC",
    para1:
      "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.",
    para2:
      "In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.",
    para3: null,
    para4: null,
  },
  // {
  //   heading: "ABOUT IRC",
  //   para1:
  //     "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.",
  //   para2:
  //     "In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.",
  //   para3: null,
  //   para4: null,
  // },
  // {
  //   heading: "ABOUT IRC",
  //   para1:
  //     "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.",
  //   para2:
  //     "In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.",
  //   para3: null,
  //   para4: null,
  // },
  // {
  //   heading: "ABOUT IRC",
  //   para1:
  //     "Started in the year 2017, the International Rover Challenge (formerly Indian Rover Challenge) held its first edition in January of the following year. Over the years, IRC has established itself as one of the leading space robotics competitions.",
  //   para2:
  //     "In IRC 2025, there will be an increased emphasis on creating awareness about the best practices and methods of systems engineering. The main focus is to highlight the benefits of an approach covering the whole project life cycle of developing a Mars Rover.",
  //   para3: null,
  //   para4: null,
  // },
];

export default function IRCPage() {
  return (
    <>
      <Helmet>
        <title>Criss Robotics | Alumni</title>
      </Helmet>
      <TransitionEffect></TransitionEffect>
      <header>
        <Navbar color="#00275B" />
      </header>
      <main className={styles.ircpage}>
        <IRC />
      </main>
      <div className={styles.infoSection}>
        {infoData.map((data, index) => (
          <motion.div {...HeadAnimation( index % 2 === 0 ? "right" : "left" , 0.1)}>
            <InfoContainer
              key={data.index}
              heading={data.heading}
              para1={data.para1}
              para2={data.para2}
              para3={data.para3}
              para4={data.para4}
            />
          </motion.div>
        ))}
      </div>
      <Footer />
    </>
  );
}
