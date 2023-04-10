import React from "react";
import "./Footer.css";
import gericht from "../../assets/images/gericht.png";
import { FaFacebookF } from "react-icons/fa";
import Spoon from "../../assets/images/spoon.png";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <div className="footer-content-lh">
          <h6>Contact Us</h6>
          <p>9 W 53rd St, New York, NY 10019, USA</p>
          <span>+1 212-344-1230</span>
          <span>+1 212-555-1230</span>
        </div>
        <div className="footer-content-center">
          <img
            src={gericht}
            alt="logo image for footer"
            className="gericht-Image"
          />
          <p>
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={Spoon} alt="spoon image" />
          <div className="icons">
            <FaFacebookF size={20} />
            <BsInstagram size={20} />
            <AiOutlineTwitter size={20} />
          </div>
        </div>
        <div className="footer-content-rh">
          <h6>Working Hours</h6>
          <p>Monday-Friday: 08:00 am -12:00 am</p>
          <p>Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
      <hr />
      <div className="copy-right">
        <p>2023 Gerícht. All Rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
