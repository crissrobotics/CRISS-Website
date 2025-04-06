import React, { useState, useEffect } from "react";
import "./navbar.scss";
import "./ham.css";
import { NavLink, useLocation } from "react-router-dom";

import crissLogo from "../../../assets/images/Navbar/logo.png";

export default function Navbar({ color }) {

  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const [isHamOpen, setIsHamOpen] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  const handleHamOpen = () => {
    setIsHamOpen(!isHamOpen)
  }

  useEffect(() => {
    isHamOpen ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "visible";
  }, [isHamOpen])


  return (
    <>
      <nav className="navbar" style={{ backgroundColor: navbar ? '#00275B' : color }}>
        <div className="logo">
          <NavLink to="/"><img src={crissLogo}></img>  </NavLink>
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">Home</NavLink>
            </li>
            {/* <li>
              <NavLink to="/irc" activeclassname="active">IRC</NavLink>
            </li> */}
            {/* <li>
              <NavLink to="/events" activeclassname="active">Robowars</NavLink>
            </li> */}
            <li>
              <NavLink to="/sponsorship" activeclassname="active">Sponsorship</NavLink>
            </li>
            <li>
              <NavLink to="/competitions" activeclassname="active">Competitions</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeclassname="active">Team</NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeclassname="active">Alumni</NavLink>
            </li>
          </ul>
        </div>

        <div className="row ham" >
          <input type="checkbox" id="hamburger" checked={isHamOpen} />
          <label htmlFor="hamburger" className="hamburger" onClick={handleHamOpen}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </label>
        </div>

        <div className={`ham-menu ${isHamOpen && 'open'}`}>
          <ul className="ham-list">
            <li>
              <NavLink to="/" activeclassname="active" onClick={handleHamOpen}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/events" activeclassname="active" onClick={handleHamOpen}>Robowars</NavLink>
            </li>
            <li>
              <NavLink to="/sponsorship" activeclassname="active" onClick={handleHamOpen}>Sponsorship</NavLink>
            </li>
            <li>
              <NavLink to="/competitions" activeclassname="active" onClick={handleHamOpen}>Competitions</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeclassname="active" onClick={handleHamOpen}>Team</NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeclassname="active" onClick={handleHamOpen}>Alumni</NavLink>
            </li>
            {/* <li>
              <NavLink to="/events" activeclassname="active" onClick={handleHamOpen}>Events</NavLink>
            </li> */}
          </ul>
        </div>

      </nav>
    </>
  );
}

