import React from "react";
import "./Newsletter.css";
import Spoon from "../../assets/images/spoon.png";

const Newsletter = () => {
  return (
    <>
      <div className="main-newsletter">
        <div className="newsletter">
          <span>Newsletter</span>
          <img src={Spoon} alt="Spoon Image" />
          <h4>Subscribe to Our Newsletter</h4>
          <p>And never miss latest Updates!</p>
          <div className="input">
            <input type="email" placeholder="Email Address" />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
