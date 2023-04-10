import React from "react";
import "./Gallery.css";
import Spoon from "../../assets/images/spoon.png";
import gallery01 from "../../assets/images/gallery01.png";
import gallery02 from "../../assets/images/gallery02.png";
import gallery03 from "../../assets/images/gallery03.png";
import gallery04 from "../../assets/images/gallery04.png";

const Gallery = () => {
  return (
    <>
      <div className="main-gallery">
        <div className="gallery-content">
          <span>Instagram</span>
          <img src={Spoon} alt="spoon image" />
          <h6>Photo Gallery</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <button className="btn">View More</button>
        </div>
        <div className="gallery-images">
          <img src={gallery01} alt="gallery Image" />
          <img src={gallery02} alt="gallery Image" />
          <img src={gallery03} alt="gallery Image" />
          <img src={gallery04} alt="gallery Image" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
