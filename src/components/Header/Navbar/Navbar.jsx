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
              <NavLink to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/sponsorship" activeClassName="active">Sponsorship</NavLink>
            </li>
            <li>
              <NavLink to="/competitions" activeClassName="active">Competitions</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeClassName="active">Team</NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeClassName="active">Alumni</NavLink>
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
              <NavLink to="/" activeClassName="active" onClick={handleHamOpen}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/sponsorship" activeClassName="active" onClick={handleHamOpen}>Sponsorship</NavLink>
            </li>
            <li>
              <NavLink to="/competitions" activeClassName="active" onClick={handleHamOpen}>Competitions</NavLink>
            </li>
            <li>
              <NavLink to="/team" activeClassName="active" onClick={handleHamOpen}>Team</NavLink>
            </li>
            <li>
              <NavLink to="/alumni" activeClassName="active" onClick={handleHamOpen}>Alumni</NavLink>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
}

