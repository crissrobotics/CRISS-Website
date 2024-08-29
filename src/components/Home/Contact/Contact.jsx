import React from "react";
import "./contact.scss";
import Swal from 'sweetalert2'
import { motion } from "framer-motion";
import { slideAnimation } from "../../Header/Motion/Motion";

import email from "../../../assets/images/Homepage/email.png";
import call from "../../../assets/images/Homepage/call.png"

export default function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "7c22bb57-0d92-4b74-9471-fe09d17686f6");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <div className="contactContainer" id="contact">
            <h2>Connect<span>With Us</span></h2>
            <div className="details">
                <motion.div className="left" {...slideAnimation("left", 0.5)}>
                    <h4>Contact Us</h4>
                    <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                    <form onSubmit={onSubmit}>
                        <div className="input-box">
                            <label>Full Name</label>
                            <input type="text" name="Name" placeholder="Enter you name" required></input>
                        </div>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" name="Email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <label>Message</label>
                            <textarea name="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </motion.div>
                <motion.div className="right" {...slideAnimation("right", 0.5)}>
                    <h4>Contact Information</h4>
                    <p>Feel free to reach out to us for any queries or collaborations.</p>
                    <div className="email">
                        <img src={email}></img>
                        <a target="_blank" rel="noopener noreferrer" href="mailto:crissrobotics@pilani.bits-pilani.ac.in">crissrobotics@pilani.bits-pilani.ac.in</a>
                    </div>
                    <div className="call">
                        <img src={call}></img>
                        <a target="_blank" rel="noopener noreferrer" href="tel:+917000868748">+91 7000868748</a>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.837304999576!2d75.58706707373962!3d28.363767996237954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391319d22fc7bb49%3A0x6d199729bd3a1bb1!2sCRISS%20Robotics!5e0!3m2!1sen!2sin!4v1721654098436!5m2!1sen!2sin"
                        height="346"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    )
}