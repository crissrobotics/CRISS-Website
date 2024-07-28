import React, { useEffect } from "react";
import "./home.scss";
import { Helmet } from 'react-helmet';
import Marquee from "react-fast-marquee";
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

import Navbar from "../Header/Navbar/Navbar";
import About from "./About/About";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";
import Mission from "./Mission/Mission";
import Contact from "./Contact/Contact";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { slideAnimation } from "../Header/Motion/Motion";

import SponsorCard from "./SponsorCard/SponsorCard";
import bits from "../../assets/images/Homepage/bits.png";
import altium from "../../assets/images/Homepage/altium.png";
import ansys from "../../assets/images/Homepage/ansys.png";
import autodesk from "../../assets/images/Homepage/autodesk.png";
import pcb from "../../assets/images/Homepage/pcb.png";
import sigma from "../../assets/images/Homepage/sigma.png";
import skf from "../../assets/images/Homepage/skf.png";
import solidworks from "../../assets/images/Homepage/solidworks.jpg";
import speedacc from "../../assets/images/Homepage/speedacc.png";

import bgVideo from "../../assets/images/Homepage/bgvideo.mp4";
import backImg from "../../assets/images/Homepage/background.jpg";

export default function Home() {


    useEffect(() => {
        gsap.set('.aboutContainer', { yPercent: -50 });

        const uncover = gsap.timeline({ paused: true });

        uncover.to('.aboutContainer', { yPercent: 0, ease: 'none' });

        ScrollTrigger.create({
            trigger: '.heroContainer',
            start: 'bottom bottom',
            end: '+=100%',
            animation: uncover,
            scrub: true,
        });
    }, []);


    return (
        <>
            <Helmet>
                <title>Criss Robotics</title>
            </Helmet>
            <Navbar color="transparent" />
            <div className="homepageContainer">
                <div className="heroContainer">
                    <TransitionEffect></TransitionEffect>
                    <video src={bgVideo} autoPlay muted loop ></video>
                    <div className="heading">
                        <h1>CRISS</h1>
                        {/* <h6>Consortium for Research in Space Systems</h6> */}
                        <h6>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Consortium for Research in Space Systems")
                                        .pauseFor(1000)
                                        // .deleteAll()
                                        // .typeString("Welcomes You")
                                        .start();
                                }}
                            />
                        </h6>
                    </div>
                </div>

                <motion.div className="aboutContainer" style={{ backgroundImage: `url(${backImg})` }}>
                    <About></About>
                </motion.div>

                <motion.div className="missionContainer" {...slideAnimation("right", 0.5)}>
                    <Mission></Mission>
                </motion.div>

                <div className="sponsorContainer">
                    <h2>Our<span>Sponsors</span></h2>
                    <div className="sponsoreCard">
                        <div className="sponsorCardUpperRow">
                            <Marquee>
                                <SponsorCard sponsorImg={bits}></SponsorCard>
                                <SponsorCard sponsorImg={altium}></SponsorCard>
                                <SponsorCard sponsorImg={ansys}></SponsorCard>
                                <SponsorCard sponsorImg={autodesk}></SponsorCard>
                                <SponsorCard sponsorImg={pcb}></SponsorCard>
                                <SponsorCard sponsorImg={sigma}></SponsorCard>
                                <SponsorCard sponsorImg={skf}></SponsorCard>
                            </Marquee>
                        </div>
                        <div className="sponsorCardLowerRow">
                            <Marquee direction="right">
                                <SponsorCard sponsorImg={skf}></SponsorCard>
                                <SponsorCard sponsorImg={sigma}></SponsorCard>
                                <SponsorCard sponsorImg={solidworks}></SponsorCard>
                                <SponsorCard sponsorImg={speedacc}></SponsorCard>
                                <SponsorCard sponsorImg={pcb}></SponsorCard>
                                <SponsorCard sponsorImg={ansys}></SponsorCard>
                                <SponsorCard sponsorImg={altium}></SponsorCard>
                            </Marquee>
                        </div>
                    </div>
                </div>

                <div className="contactContainer">
                    <Contact></Contact>
                </div>
            </div>

            <Footer></Footer>

        </>
    )
}