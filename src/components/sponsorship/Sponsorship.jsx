import React, { useRef, useEffect } from "react";
import "./sponsorship.css";
import { Helmet } from 'react-helmet';
import SponzCard from "./SponzCard/SponzCard";
import { motion } from "framer-motion";
import { fadeAnimation, HeadAnimation, slideAnimation } from "../Header/Motion/Motion";

import SponsorshipPic1 from "../../assets/images/Sponsorship/Sponsorship-1.png";
import SponsorshipPic2 from "../../assets/images/Sponsorship/Sponsorship-2.png";
import SponsorshipPic3 from "../../assets/images/Sponsorship/Sponsorship-3.png";

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
import BROIMG from "../../assets/images/Sponsorship/image 22.png";

import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";

export default function sponsorship() {
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Sponsorship</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <header>
                <Navbar color="#00275B" />
            </header>
            <main className="sponsorshipContainers">
                
                    <motion.div className="teamPic" {...HeadAnimation("up", 0.1)}>
                        <img src={SponsorshipPic1} className="PicOne" />
                    </motion.div>

                    <div className="text1">
                        <motion.div  {...slideAnimation("up", 0.3)}  >
                            <p><span className="one">CRISS</span> <span className="two">Robotics</span>, a student-led robotics and engineering company, is known for its excellence in design and innovation. The company competes in the University Rover Challenge, organized by the Mars Society, where it showcases its capabilities to leading scientists and technocrats. The company's success is attributed to its strategic partnership with partner sponsors, who are prominently featured on team merchandise and social media platforms such as Facebook, Instagram, and YouTube. CRISS Robotics also shines in <span className="three">APOGEE</span>, BITS Pilani's technical festival, where their projects attract a diverse audience of enthusiasts and industry professionals. This platform not only showcases their technical prowess but also offers opportunities for sponsor visibility and brand engagement. The company continues to push the boundaries of robotics innovation, representing BITS Pilani with pride and determination.</p>
                        </motion.div>
                    </div>

                    <div className="text2">
                        <motion.img src={SponsorshipPic2} className="Pic2" {...slideAnimation("left", 0.5)} />
                        <motion.p {...slideAnimation("right", 0.5)}>Sponsoring CRISS Robotics presents a unique opportunity to align your brand with cutting-edge research and development at one of the world's most prestigious engineering institutions, <span className="three">BITS Pilani</span>. With a proud legacy of producing top-tier talent, our club exemplifies excellence in innovation and technical prowess. Your support will enable us to continue participating in international competitions, further enhance our technical capabilities, and realize groundbreaking solutions.</motion.p>
                    </div>

                    <div className="text3">
                        <motion.p {...slideAnimation("left", 0.5)}>By <span className="three">partnering with us</span>, your company will gain significant visibility among bright engineering students who represent the future workforce. Sponsorship benefits include prominent placement of your company's logo on our latest rover, extensive exposure through our active social media channels, and collaborative events during major festivals. These initiatives not only enhance your brand's visibility but also position your company as a forward-thinking leader committed to driving technological advancements.</motion.p>
                        <motion.img src={SponsorshipPic3} className="Pic3" {...slideAnimation("right", 0.5)} />
                    </div>

                    <div className="OurSponsors">
                        <motion.h1 className="heading2" {...slideAnimation("up", 0.1)}>Our <span>Sponsors</span></motion.h1>
                        <motion.p {...slideAnimation("up", 0.3)}>Sponsors play a crucial role in the success story of CRISS Robotics. Their steadfast support, providing essential financial and technical resources, has been pivotal in driving our team forward towards achieving our objectives. We deeply appreciate the commitment and partnership of all our sponsors and look forward to nurturing and expanding these relationships in the pursuit of continued excellence and innovation. </motion.p>
                    </div>

                    <div className="total">
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={bits} link="https://www.bits-pilani.ac.in/"></SponzCard> </motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={optica} link="https://www.opticsindia.com/?srsltid=AfmBOopuqBhsJTXnQ8T3o_woMLNCIr3rGvuJ4t-7Yf_85pwPLK6AmXzg"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={srt} link="https://www.shreerapid.com"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={dwart} link="https://dwartindustries.com/"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={autodesk} link="https://www.autodesk.com/in?mktvar002=afc_in_nmpi_ppc&AID=13084956&PID=8206971&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&&cjevent=a415b36419b312da0589d5fad647a89c&click_id=a415b36419b312da0589d5fad647a89c&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&msclkid=a415b36419b312da0589d5fad647a89c"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={pcb} link="https://www.pcbpower.com/"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={speedacc} link=""></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={sigma} link="https://sigmaclothing.in"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={altium} link="https://www.altium.com/"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={ansys} link="https://www.ansys.com/"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={solidworks} link="https://www.solidworks.com/"></SponzCard></motion.div>
                        <motion.div {...HeadAnimation("up", 0.1)}><SponzCard photo={skf} link="https://www.skf.com/in"></SponzCard></motion.div>
                    </div>

                    <div className="Brochure">
                        <motion.h1 className="heading3" {...slideAnimation("up", 0.1)}>Support <span>Us</span></motion.h1>
                        <div className="brochureDIV">
                            <a href="https://online.fliphtml5.com/zusvs/vefu/" target="_blank"><motion.img {...slideAnimation("left", 0.5)} src={BROIMG}></motion.img></a>
                            <motion.p {...slideAnimation("right", 0.5)} className="BrochurePara">We are multidisciplinary <span>space engineering and Robotics Research group</span> in BITS Pilani (Pilani campus) consisting of 60+ tech enthusiasts with a vision to innovate and develop <span>space exploration projects</span>. Our objective is to enhance on-board research and improve life-finding technologies in space while maintaining cost efficiency and innovation.</motion.p>
                        </div>
                    </div>
            </main>
            <Footer></Footer>
        </>

    )
}

