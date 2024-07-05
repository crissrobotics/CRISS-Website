import React from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import bgVideo from "./assets/images/Homepage/bgvideo.mp4";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        {/* <video autoPlay loop muted src="https://www.stag4.mydemoview.com/spros/wp-content/uploads/2022/08/Space-Robotics-Society.m4v"></video> */}
        {/* <p>Welcome to </p>
        <h1>Home Page</h1> */}
        <video src={bgVideo} autoPlay muted loop></video>
      </section>
    </>
  );
};

const Team = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Team Page</h1>
      </section>
    </>
  );
};

const OurAlumni = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Alumni Page</h1>
      </section>
    </>
  );
};

const Support = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Support US Page</h1>
      </section>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Contact Page</h1>
      </section>
    </>
  );
};


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/alumni" element={<OurAlumni />} />
      <Route path="/support" element={<Support />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;