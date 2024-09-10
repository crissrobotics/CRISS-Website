import React, { useEffect, useState } from "react";
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
import Loader from "../Loader/Loader";
import { motion } from "framer-motion";
import { slideAnimation } from "../Header/Motion/Motion";

import SponsorCard from "./SponsorCard/SponsorCard";
import bits from "../../assets/images/Homepage/bits.png";
import altium from "../../assets/images/Homepage/altium.png";
import ansys from "../../assets/images/Homepage/ansys.png";
import autodesk from "../../assets/images/Homepage/autodesk.jpeg";
import pcb from "../../assets/images/Homepage/pcb.png";
import sigma from "../../assets/images/Homepage/sigma.png";
import skf from "../../assets/images/Homepage/skf.png";
import solidworks from "../../assets/images/Homepage/solidworks.jpg";
import speedacc from "../../assets/images/Homepage/speedacc.png";
import optica from "../../assets/images/Homepage/optica.webp";
import srt from "../../assets/images/Homepage/srt.png";
import dwart from "../../assets/images/Homepage/dwart.jpg";

import bgVideo from "../../assets/images/Homepage/bgvideo.mp4";
// import backImg from "../../../assets/images/Homepage/background.jpg";
// import backImg1 from "../../../assets/images/Homepage/backgroundlarge.jpeg";
import backgroundImage from "../../assets/images/Competitions/backgroundImage.jpg"

export default function Home() {

    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [backgroundImage, setBackgroundImage] = useState(backImg);

    // useEffect(() => {
    //     const updateBackgroundImage = () => {
    //         if (window.innerWidth > 1400) {
    //             setBackgroundImage(backImg1);
    //         } else {
    //             setBackgroundImage(backImg);
    //         }
    //     };

    //     updateBackgroundImage();

    //     window.addEventListener('resize', updateBackgroundImage);

    //     return () => {
    //         window.removeEventListener('resize', updateBackgroundImage);
    //     };
    // }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        if (windowWidth >= 500) {
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
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            window.removeEventListener('resize', handleResize);
        };
    }, [windowWidth]);

    const handleVideoLoad = () => {
        setTimeout(() => {
            setIsVideoLoaded(true);
        }, 1000);
    }

    return (
        <>
            <Helmet>
                <title>Criss Robotics</title>
            </Helmet>
            {!isVideoLoaded && (
                <Loader />
            )}
            <div className={`homepageContainer ${!isVideoLoaded ? 'hidden' : ''}`}>
                <Navbar color="transparent" />
                <div className="heroContainer">
                    <TransitionEffect />

                    <video
                        src={bgVideo}
                        autoPlay
                        muted
                        loop
                        onCanPlay={handleVideoLoad}
                    />

                    <div className="heading">
                        <h1>CRISS</h1>
                        <h6>
                            {isVideoLoaded && (
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Consortium for Research in Space Systems")
                                            .pauseFor(1000)
                                            .start();
                                    }}
                                />
                            )}
                        </h6>
                    </div>
                </div>

                <motion.div className="aboutContainer" style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <About />
                </motion.div>

                <motion.div className="missionContainer" {...slideAnimation("right", 0.5)}>
                    <Mission />
                </motion.div>

                <div className="sponsorContainer">
                    <h2>Our<span>Sponsors</span></h2>
                    <div className="sponsorCard">
                        <div className="sponsorCardUpperRow">
                            <Marquee>
                                <SponsorCard sponsorImg={bits} />
                                <SponsorCard sponsorImg={altium} />
                                <SponsorCard sponsorImg={ansys} />
                                <SponsorCard sponsorImg={optica} />
                                <SponsorCard sponsorImg={autodesk} />
                                <SponsorCard sponsorImg={dwart} />
                                <SponsorCard sponsorImg={sigma} />
                                <SponsorCard sponsorImg={srt} />
                                <SponsorCard sponsorImg={optica} />
                            </Marquee>
                        </div>
                        <div className="sponsorCardLowerRow">
                            <Marquee direction="right">
                                <SponsorCard sponsorImg={dwart} />
                                <SponsorCard sponsorImg={skf} />
                                <SponsorCard sponsorImg={optica} />
                                <SponsorCard sponsorImg={solidworks} />
                                <SponsorCard sponsorImg={srt} />
                                <SponsorCard sponsorImg={speedacc} />
                                <SponsorCard sponsorImg={pcb} />
                                <SponsorCard sponsorImg={altium} />
                                <SponsorCard sponsorImg={srt} />

                            </Marquee>
                        </div>
                    </div>
                </div>

                <div className="contactContainer">
                    <Contact />
                </div>
            </div>

            <Footer />
        </>
    );
}