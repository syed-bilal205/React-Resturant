import React from "react";
import "./AboutUs.css";
import Spoon from "../../assets/images/spoon.png";
import Knife from "../../assets/images/knife.png";

const AboutUs = () => {
  return (
    <>
      <div className="About-section">
        <div className="about-content">
          <h2>About Us</h2>
          <img src={Spoon} alt="spoon image" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button className="btn">Know More</button>
        </div>
        <div className="about-image">
          <img src={Knife} alt="Knife Image" />
        </div>
        <div className="about-content2">
          <h2>Our History</h2>
          <img src={Spoon} alt="spoon image" />
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button className="btn">Know More</button>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
