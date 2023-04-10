import React from "react";
import "./Chef.css";
import ChefImage from "../../assets/images/chef.png";
import Spoon from "../../assets/images/spoon.png";
import Comma from "../../assets/images/quote.png";
import Sign from "../../assets/images/sign.png";

const Chef = () => {
  return (
    <>
      <div className="chef-main">
        <div className="chef-Image">
          <img src={ChefImage} alt="Chef Image" />
        </div>
        <div className="chef-content">
          <span>Chef’s Word</span>
          <img src={Spoon} alt="Spoon" />
          <h4>What we believe in</h4>
          <div className="comma">
            <img src={Comma} alt="Quote Image" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
              <p>
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
                sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
                molestie lectus eu. Congue iaculis integer curabitur semper sit
                nunc.
              </p>
            </p>
          </div>
          <h6>Kevin Luo</h6>
          <span className="founder">Chef & Founder</span>
          <img src={Sign} alt="Sign Image" className="sign" />
        </div>
      </div>
    </>
  );
};

export default Chef;
