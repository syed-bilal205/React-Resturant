import React from "react";
import "./Hero.css";
import Spoon from "../../assets/images/spoon.png";
import HeroImage from "../../assets/images/welcome.png";

const Hero = () => {
  return (
    <>
      <div className="hero-Section">
        <div className="hero-Content">
          <span>Chase the new Flavour</span>
          <img src={Spoon} alt="Spoon Image" />
          <h1>The key to Fine dining</h1>
          <p>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <button className="btn">Explore Menu</button>
        </div>
        <div className="hero-Image">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
