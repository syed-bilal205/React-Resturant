import React from "react";
import "./Find.css";
import Spoon from "../../assets/images/spoon.png";
import FindUsImage from "../../assets/images/findus.png";

const Find = () => {
  return (
    <>
      <div className="main-find-us">
        <div className="find-us-content">
          <span>Contact</span>
          <img src={Spoon} alt="Spoon Image" />
          <h5>Find Us</h5>
          <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
          <h6>Opening Hours</h6>
          <p>Mon - Fri: 10:00 am - 02:00 am</p>
          <p>Sat - Sun: 10:00 am - 03:00 am</p>
          <button className="btn">Visit Us</button>
        </div>
        <div className="find-us-image">
          <img src={FindUsImage} alt="Find Us Image" />
        </div>
      </div>
    </>
  );
};

export default Find;
