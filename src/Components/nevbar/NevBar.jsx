import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./nevbar.css";
import NevBarIcon from "./NevBarIcon";
import Dropdown from "./dropdown/Dropdown";
import LogIcon from "../logIcon/logIcon";

const NevBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const closeMobileMenu = () => setClick(false);
  
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <LogIcon/>
      <NevBarIcon />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li
              className=" 'nav-item"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/courses"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Courses <i className="fas fa-aret-down" />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <div className="start">
          <Link to="/login">
            <button className="button">Join Now</button>
            </Link>
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"> </i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default NevBar;