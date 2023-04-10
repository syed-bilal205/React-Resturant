import React from "react";
import "./Awards.css";
import Logo from "../../assets/images/logo.png";
import Spoon from "../../assets/images/spoon.png";
import AwardImage1 from "../../assets/images/award03.png";
import AwardImage2 from "../../assets/images/award05.png";
import laurels from "../../assets/images/laurels.png";

const Awards = () => {
  return (
    <>
      <div className="award-logo">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="award-main">
          <div className="award-content">
            <span>Awards & recognition</span>
            <img src={Spoon} alt="Spoon Image" />
            <h6>Our Laurels</h6>

            <div className="award-container">
              <div className="awards-image">
                <img src={AwardImage1} alt="Award Image" />
              </div>
              <div className="award-heading">
                <h6>Bib Gourmond</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>

              <div className="awards-image">
                <img src={AwardImage2} alt="Award Image" />
              </div>
              <div className="award-heading">
                <h6>Bib Gourmond</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>

            <div className="award-container">
              <div className="awards-image">
                <img src={AwardImage1} alt="Award Image" />
              </div>
              <div className="award-heading">
                <h6>Bib Gourmond</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>

              <div className="awards-image">
                <img src={AwardImage2} alt="Award Image" />
              </div>
              <div className="award-heading">
                <h6>Bib Gourmond</h6>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
              </div>
            </div>
          </div>
          <div className="award-image">
            <img src={laurels} alt="award Image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;
