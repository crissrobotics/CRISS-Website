import React, { useRef, useEffect } from "react";
import "./sponsorship.scss";
import { Helmet } from 'react-helmet';
import FlippingCard from "../sponsorship/FlippingCard";
import "./FlippingCard.scss";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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
    const imgRef1 = useRef(null);
    const imgRef2 = useRef(null);
    const imgRef3 = useRef(null);
    useEffect(() => {

        const el = imgRef1.current;
        gsap.fromTo(el, { xPercent: -50, yPercent: -50 }, {
            xPercent: 0, yPercent: 0, scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom 90%",
                scrub: true
            }
        })

        const ell = imgRef2.current;
        gsap.fromTo(ell, { xPercent: 50, yPercent: -50 }, {
            xPercent: 0, yPercent: 0, scrollTrigger: {
                trigger: ell,
                start: "top bottom",
                end: "bottom 90%",
                scrub: true
            }
        })

        // const elll=imgRef3.current;
        // gsap.fromTo(elll,{x:0,y:0},{x:-10,y:-10,duration:1,scrollTrigger:{
        //     trigger:elll,
        //     scrub:true
        // }})

    }, [])
    return (
        <>
            <Helmet>
                <title>Criss Robotics | Sponsorship</title>
            </Helmet>
            <TransitionEffect></TransitionEffect>
            <div className="sponsorshipContainer">

                <Header color="#00275B"></Header>

                <h1 className="texttt" data-text="SPONSORSHIP"></h1>

                <div className="teamPic">
                    <img src={SponsorshipPic1} className="Pic1" />
                </div>

                <div className="text1">
                    <p><span className="one">CRISS</span> <span className="two">Robotics</span>, a student-led robotics and engineering company, is known for its excellence in design and innovation. The company competes in the University Rover Challenge, organized by the Mars Society, where it showcases its capabilities to leading scientists and technocrats. The company's success is attributed to its strategic partnership with partner sponsors, who are prominently featured on team merchandise and social media platforms such as Facebook, Instagram, and YouTube. CRISS Robotics also shines in <span className="three">APOGEE</span>, BITS Pilani's technical festival, where their projects attract a diverse audience of enthusiasts and industry professionals. This platform not only showcases their technical prowess but also offers opportunities for sponsor visibility and brand engagement. The company continues to push the boundaries of robotics innovation, representing BITS Pilani with pride and determination.</p>
                </div>

                <div className="text2">
                    <img src={SponsorshipPic2} className="Pic2" ref={imgRef1} />
                    <p>Sponsoring CRISS Robotics presents a unique opportunity to align your brand with cutting-edge research and development at one of the world's most prestigious engineering institutions, <span className="three">BITS Pilani</span>. With a proud legacy of producing top-tier talent, our club exemplifies excellence in innovation and technical prowess. Your support will enable us to continue participating in international competitions, further enhance our technical capabilities, and realize groundbreaking solutions.</p>
                </div>

                <div className="text3">
                    <p>By <span className="three">partnering with us</span>, your company will gain significant visibility among bright engineering students who represent the future workforce. Sponsorship benefits include prominent placement of your company's logo on our latest rover, extensive exposure through our active social media channels, and collaborative events during major festivals. These initiatives not only enhance your brand's visibility but also position your company as a forward-thinking leader committed to driving technological advancements.</p>
                    <img src={SponsorshipPic3} className="Pic3" ref={imgRef2} />
                </div>

                <div className="OurSponsors">
                    <h1 className="textt" data-text="OUR SPONSORS" ref={imgRef3}></h1>
                    <p>Sponsors play a crucial role in the success story of CRISS Robotics. Their steadfast support, providing essential financial and technical resources, has been pivotal in driving our team forward towards achieving our objectives. We deeply appreciate the commitment and partnership of all our sponsors and look forward to nurturing and expanding these relationships in the pursuit of continued excellence and innovation. </p>
                </div>

                <div className="total">
                    <FlippingCard photo={bits} link="https://www.bits-pilani.ac.in/"></FlippingCard>
                    <FlippingCard photo={altium} link="https://www.altium.com/"></FlippingCard>
                    <FlippingCard photo={ansys} link="https://www.ansys.com/"></FlippingCard>
                    <FlippingCard photo={autodesk} link="https://www.autodesk.com/in?mktvar002=afc_in_nmpi_ppc&AID=13084956&PID=8206971&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&ds_rl=1232455&ds_rl=1232461&ds_rl=1233896&&cjevent=a415b36419b312da0589d5fad647a89c&click_id=a415b36419b312da0589d5fad647a89c&gclid=a415b36419b312da0589d5fad647a89c&gclsrc=3p.ds&msclkid=a415b36419b312da0589d5fad647a89c"></FlippingCard>
                    <FlippingCard photo={pcb} link="https://www.pcbpower.com/"></FlippingCard>
                    <FlippingCard photo={sigma} link="https://www.sigmaaldrich.com/IN/en?utm_source=bing&utm_medium=cpc&utm_campaign=milliporesigma%20branded_WW_(bing%20ebizbrand)&utm_campaignid=626793222&utm_content=1165483510438650&msclkid=169067f8e6bb12f29a720166369c9a69&utm_term=sigma"></FlippingCard>
                    <FlippingCard photo={skf} link="https://www.skf.com/in"></FlippingCard>
                    <FlippingCard photo={solidworks} link="https://www.solidworks.com/"></FlippingCard>
                    <FlippingCard photo={speedacc} link="http://www.speedacc.co.za/about-us"></FlippingCard>
                </div>

                <div className="Brochure">
                    <h1 className="text" data-text="BROCHURE"></h1>

                </div>

                <Footer></Footer>
            </div>
        </>

    )
}
