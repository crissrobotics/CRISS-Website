import React from "react";
import "./contact.scss";
import Swal from 'sweetalert2'

import email from "../../../assets/images/Homepage/email.png";
import call from "../../../assets/images/Homepage/call.png"

export default function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "d522709c-87b2-4392-898b-f8e36c3d698b");

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
        <div className="contactContainer">
            <h2>Connect<span>With Us</span></h2>
            <div className="details">
                <div className="left">
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
                </div>
                <div className="right">
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.9908613146695!2d75.58404392695313!3d28.359125899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20And%20Science%20-%20Pilani!5e0!3m2!1sen!2sin!4v1720702371484!5m2!1sen!2sin"
                        width="542"
                        height="346"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}