import React from "react";
import Logo from "../../assets/images/gericht.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleChange = () => {
    setNav(!nav);
  };

  return (
    <>
      {/* navbar section start */}
      <nav className="nav">
        {/* logo */}
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        {/* navabr links */}
        <div className={nav ? "navbar-link" : "navbar-End"}>
          <ul className="nav-links">
            <li>Home</li>
            <li>Pages</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Landing</li>
          </ul>
        </div>
        <ul className="login">
          <li>Log In / Registration</li>
          <li>|</li>
          <li>Book Table</li>
        </ul>
        {/* Hamburger Menu Start */}
        <div className="mobile-icon" onClick={handleChange}>
          {nav ? (
            <AiOutlineClose size={30} className="mobile-close-icon" />
          ) : (
            <GiHamburgerMenu size={30} className="mobile-open-icon" />
          )}
        </div>
      </nav>
      {/* navbar section end */}
    </>
  );
};

export default Navbar;
