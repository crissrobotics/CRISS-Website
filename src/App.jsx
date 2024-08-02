import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Header/Navbar/Navbar";
import Team from "./components/Team/Team";
import Home from "./components/Home/Home";
import Alumni from "./components/Alumni/Alumni";
import Sponsorship from "./components/sponsorship/Sponsorship";
import Competitions from "./components/competitions/Competitions";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sponsorship" element={<Sponsorship />} />
      <Route path="/competitions" element={<Competitions />} />
      <Route path="/team" element={<Team />} />
      <Route path="/alumni" element={<Alumni />} />
    </Routes>
  );
};

export default App;
