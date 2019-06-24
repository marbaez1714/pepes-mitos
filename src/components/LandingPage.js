import React from "react";
import MapSection from "./MapSection";
import "./pm-styles.scss";

const parallaxImage = background => {
  return <div className={`parallaxSection parallax ${background}`} />;
};

export default function LandingPage(props) {
  return (
    <div className="parallaxWrapper">
      {parallaxImage("bg1")}
      <div className="parallaxSection menuContainer">
        <h1>Boring</h1>
      </div>
      {parallaxImage("bg2")}
      <div className="parallaxSection menuContainer">
        <h1>Boring</h1>
      </div>
      {parallaxImage("bg3")}
      <MapSection />
    </div>
  );
}
