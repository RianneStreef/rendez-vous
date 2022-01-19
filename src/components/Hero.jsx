import React from "react";
import heroImage from "../images/bar.jpg";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <div>
      <img src={heroImage} alt="" className="hero" />
    </div>
  );
};

export default Hero;
