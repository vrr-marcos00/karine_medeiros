import React from "react";
import "./styles.css";

/**
 * Images
 */
import homeImage from "./images/home_image.png"
import homeLogo from "./images/logo-home.png";

function HomeComponent() {
  return (
    <div className="home-component" id="home">
      <div className="home-image">
        <img src={homeImage} alt="homeImage" />
      </div>

      <div className="home-logo">
        <img src={homeLogo} alt="homeLogo" />

        <div className="button-schedule" onClick={() => window.location.href = "#contato"}>
          <button>CONTATO</button>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent;