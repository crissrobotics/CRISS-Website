import React from "react";
import styles from "./ircpage.module.scss";
import { Helmet } from "react-helmet";

import Navbar from "../Header/Navbar/Navbar";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import IRC from "../competitions/IRC/IRC.jsx";
import Footer from "../Footer/Footer";
import InfoContainer from "./InfoContainer/InfoContainer.jsx";

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
        <InfoContainer />
        <InfoContainer />
      </div>
      <Footer />
    </>
  );
}
