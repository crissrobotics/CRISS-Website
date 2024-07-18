import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Header/Navbar/Navbar";
import Team from "./components/Team/Team";
import Home from "./components/Home/Home";

const OurAlumni = () => {
  return (
    <>
      <Navbar color="#00275B" />
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
      <Navbar color="#00275B" />
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>Support US Page</h1>
      </section>
    </>
  );
};

const Competitions = () => {
  return (
    <>
      <Navbar color="#00275B" />
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
      <Route path="/sponsorship" element={<Support />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/team" element={<Team />} />
      <Route path="/alumni" element={<OurAlumni />} />
    </Routes>
  );
};

export default App;