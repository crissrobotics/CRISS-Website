import React, { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

import crissLogo from "../../../assets/images/Navbar/logo.png";

export default function Navbar({color}){

  const[navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // window.addEventListener('scroll', changeBackground);

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
      </nav>
    </>
  );
}

