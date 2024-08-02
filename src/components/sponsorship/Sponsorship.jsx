import React, { useRef, useEffect } from "react";
import "./sponsorship.scss";
import { Helmet } from 'react-helmet';
import FlippingCard from "../sponsorship/FlippingCard";
import "./FlippingCard.scss";
import { motion } from "framer-motion";
import { fadeAnimation, HeadAnimation, slideAnimation } from "../Header/Motion/Motion";

import SponsorshipPic1 from "../../assets/images/Sponsorship/Sponsorship-1.png";
import SponsorshipPic2 from "../../assets/images/Sponsorship/Sponsorship-2.png";
import SponsorshipPic3 from "../../assets/images/Sponsorship/Sponsorship-3.png";

import bits from "../../assets/images/Homepage/bits.png";
import altium from "../../assets/images/Homepage/altium.png";
import ansys from "../../assets/images/Homepage/ansys.png";
import autodesk from "../../assets/images/Homepage/autodesk.png";
import pcb from "../../assets/images/Homepage/pcb.png";
import sigma from "../../assets/images/Homepage/sigma.png";
import skf from "../../assets/images/Homepage/skf.png";
import solidworks from "../../assets/images/Homepage/solidworks.jpg";
import speedacc from "../../assets/images/Homepage/speedacc.png";

import Header from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";
import TransitionEffect from "../Header/TransitionEffect/TransitionEffect";

export default function sponsorship() {
    // const imgRef1 = useRef(null);
    // const imgRef2 = useRef(null);
    // const imgRef3 = useRef(null);
    // useEffect(() => {

    //     const el = imgRef1.current;
    //     gsap.fromTo(el, { xPercent: -50, yPercent: -50 }, {
    //         xPercent: 0, yPercent: 0, scrollTrigger: {
    //             trigger: el,
    //             start: "top bottom",
    //             end: "bottom 90%",
    //             scrub: true
    //         }
    //     })

    //     const ell = imgRef2.current;
    //     gsap.fromTo(ell, { xPercent: 50, yPercent: -50 }, {
    //         xPercent: 0, yPercent: 0, scrollTrigger: {
    //             trigger: ell,
    //             start: "top bottom",
    //             end: "bottom 90%",
    //             scrub: true
    //         }
    //     })

        // const elll=imgRef3.current;
        // gsap.fromTo(elll,{x:0,y:0},{x:-10,y:-10,duration:1,scrollTrigger:{
        //     trigger:elll,
        //     scrub:true
        // }})

    // }, [])
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Sponsorship</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <Header color="#00275B"></Header>
            <div className="sponsorshipContainer">
                <h1 className="heading1" >Sponsor<span>ship</span></h1>


                <div className="teamPic">
                    <img src={SponsorshipPic1} className="Pic1" />
                </div>

                <div className="text1">
                    <motion.div  {...slideAnimation("up", 0.3)}  >
                        <p><span className="one">CRISS</span> <span className="two">Robotics</span>, a student-led robotics and engineering company, is known for its excellence in design and innovation. The company competes in the University Rover Challenge, organized by the Mars Society, where it showcases its capabilities to leading scientists and technocrats. The company's success is attributed to its strategic partnership with partner sponsors, who are prominently featured on team merchandise and social media platforms such as Facebook, Instagram, and YouTube. CRISS Robotics also shines in <span className="three">APOGEE</span>, BITS Pilani's technical festival, where their projects attract a diverse audience of enthusiasts and industry professionals. This platform not only showcases their technical prowess but also offers opportunities for sponsor visibility and brand engagement. The company continues to push the boundaries of robotics innovation, representing BITS Pilani with pride and determination.</p>
                    </motion.div> 
                </div>

                <div className="text2">
                    <motion.img src={SponsorshipPic2} className="Pic2" {...slideAnimation("left", 0.5)}/>
                    <motion.p {...slideAnimation("right", 0.5)}>Sponsoring CRISS Robotics presents a unique opportunity to align your brand with cutting-edge research and development at one of the world's most prestigious engineering institutions, <span className="three">BITS Pilani</span>. With a proud legacy of producing top-tier talent, our club exemplifies excellence in innovation and technical prowess. Your support will enable us to continue participating in international competitions, further enhance our technical capabilities, and realize groundbreaking solutions.</motion.p>
                </div>

                <div className="text3">
                    <motion.p {...slideAnimation("left", 0.5)}>By <span className="three">partnering with us</span>, your company will gain significant visibility among bright engineering students who represent the future workforce. Sponsorship benefits include prominent placement of your company's logo on our latest rover, extensive exposure through our active social media channels, and collaborative events during major festivals. These initiatives not only enhance your brand's visibility but also position your company as a forward-thinking leader committed to driving technological advancements.</motion.p>
                    <motion.img src={SponsorshipPic3} className="Pic3" {...slideAnimation("right", 0.5)}/>
                </div>

                <div className="OurSponsors">
                    <h1 className="heading2" >Our <span>Sponsors</span></h1>
                    <motion.p {...slideAnimation("up", 0.3)}>Sponsors play a crucial role in the success story of CRISS Robotics. Their steadfast support, providing essential financial and technical resources, has been pivotal in driving our team forward towards achieving our objectives. We deeply appreciate the commitment and partnership of all our sponsors and look forward to nurturing and expanding these relationships in the pursuit of continued excellence and innovation. </motion.p>
                </div>

                <div className="total">
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={bits} link="https://www.bits-pilani.ac.in/"></FlippingCard> </motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={altium} link="https://www.altium.com/"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={ansys} link="https://www.ansys.com/"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={autodesk} link="https://www.autodesk.com/in?mktvar002=afc_in_nmpi_ppc&AID=13084956&PID=8206971&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&&cjevent=a415b36419b312da0589d5fad647a89c&click_id=a415b36419b312da0589d5fad647a89c&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&msclkid=a415b36419b312da0589d5fad647a89c"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={pcb} link="https://www.pcbpower.com/"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={sigma} link="https://www.sigmaaldrich.com/IN/en?utm_source=bing&utm_medium=cpc&utm_campaign=milliporesigma%20branded_WW_(bing%20ebizbrand)&utm_campaignid=626793222&utm_content=1165483510438650&msclkid=169067f8e6bb12f29a720166369c9a69&utm_term=sigma"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={skf} link="https://www.skf.com/in"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={solidworks} link="https://www.solidworks.com/"></FlippingCard></motion.div>
                    <motion.div {...HeadAnimation("up", 0.1)}><FlippingCard photo={speedacc} link="http://www.speedacc.co.za/about-us"></FlippingCard></motion.div>
                </div>

                <div className="Brochure">
                    <h1 className="heading3" >Bro<span>chure</span></h1>
                </div> 
            </div>
            <Footer></Footer> 
        </>

    )
}

