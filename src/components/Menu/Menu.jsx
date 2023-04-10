import React from "react";
import Spoon from "../../assets/images/spoon.png";
import "./Menu.css";
// import { data } from "../../data";
// import MenuItem from "../MenuItem/MenuItem";
import MenuImage from "../../assets/images/menu.png";

const Menu = () => {
  return (
    <>
      <div className="menu-Heading">
        <span>Menu that fits you palatte</span>
        <img src={Spoon} alt="Spoon Image" />
        <h2>Today’s Special</h2>
      </div>

      <div className="main-menu">
        <div className="main-heading">
          <h3>Wine & Beer</h3>
          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>
        </div>

        <div className="menuImage">
          <img src={MenuImage} alt="Menu Image" />
          <button className="btn">View More</button>
        </div>

        <div className="main-heading">
          <h3>Cocktails</h3>
          <div className="items">
            <p style={{ color: "#DCCA87" }}>Aperol Spritz</p>

            <div className="line" />

            <p className="price">$20</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>
              Aperol | Villa Marchesi prosecco | soda | 30ml
            </p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Dark 'N' Stormy</p>

            <div className="line" />

            <p className="price">$16</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>
              Dark rum | Ginger beer | Slice of lime.
            </p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Daiquiri</p>

            <div className="line" />

            <p className="price">$10</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>Rum | Citrus juice | Sugar</p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Old Fashioned</p>

            <div className="line" />

            <p className="price">$31</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>
              Bourbon | Brown sugar | Angostura Bitters
            </p>
          </div>

          <div className="items">
            <p style={{ color: "#DCCA87" }}>Chapel Hill Shiraz</p>

            <div className="line" />

            <p className="price">$56</p>
          </div>
          <div className="tag">
            <p style={{ color: "#AAAAAA" }}>AU | Bottle</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
