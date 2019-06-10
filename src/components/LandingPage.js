import React from "react";
import MapSection from "./MapSection";
import MenuItem from "./MenuItem";
import "./pm-styles.scss";

const parallaxImage = background => {
  return <div className={`parallaxSection parallax ${background}`} />;
};

const menuExample = {
  name: "Botanas",
  disc:
    "A sampler of our delicious home-style specialties (4) fajita bean & cheese nachos (4) chicken flautas (4) fajita quesadillas & chile con queso dip. Served w/ guacamole, sour cream & pico de gallo."
};

export default function LandingPage(props) {
  return (
    <div className="parallaxWrapper">
      {parallaxImage("bg1")}
      <div className="parallaxSection static">
        <MenuItem item={menuExample} />
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
