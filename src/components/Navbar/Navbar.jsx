import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

// import { GiHamburgerMenu } from 'react-icons/gi';
import crissLogo from "../../assets/images/Navbar/logo.png";

export default function Navbar(){
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img src={crissLogo}></img>  
        </div>

        <div className="links">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/alumni">Our Alumni</NavLink>
            </li>
            <li>
                <NavLink to="/support">Support Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

