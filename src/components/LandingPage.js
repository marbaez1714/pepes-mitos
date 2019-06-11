import React from "react";
import MapSection from "./MapSection";
import "./pm-styles.scss";
import MenuSection from "./MenuSection";

const parallaxImage = background => {
  return <div className={`parallaxSection parallax ${background}`} />;
};

export default function LandingPage(props) {
  return (
    <div className="parallaxWrapper">
      {parallaxImage("bg1")}
      <MenuSection />
      {parallaxImage("bg2")}
      <div className="parallaxSection menuContainer">
        <h1>Boring</h1>
      </div>
      {parallaxImage("bg3")}
      <MapSection />
    </div>
  );
}
