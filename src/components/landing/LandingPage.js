import React from "react";
import "./LandingPage.scss";

export default function Menu(props) {
  const Pipe = <span className="section-pipe">||</span>;

  return (
    <div className="parallaxWrapper">
      <div className="section1 parallaxSection parallax">
        <div className="landingText">
          <div className="landingTitle">Pepe's & Mito's</div>
          <div className="landingSubitle">Mex-Tex Since 1994</div>
        </div>
      </div>
      <div className="parallaxSection parallax bg1" />
      <div className="section2 parallaxSection parallax" />
      <div className="parallaxSection parallax bg2" />
      <div className="section2 parallaxSection parallax" />
      <div className="parallaxSection parallax bg3" />
      <footer className="footer">
        <div className="location-title">Location</div>
        <a
          className="address"
          href="https://goo.gl/maps/pEJBpcGrtMF4rEic8"
          target="_blank"
          rel="noopener noreferrer"
        >
          2911 Elm Street, Dallas, Texas 75226
        </a>
        <div className="section-title">Hours</div>
        <div className="hours">
          <div>Mon. & Tue. {Pipe} 11am - 3pm</div>
          <div>Wed. & Thu. {Pipe} 11am - 10pm</div>
          <div>Fri. & Sat. {Pipe} 11am - 11pm</div>
          <div>Sun. {Pipe} 11am - 5pm</div>
        </div>
        <div className="section-title">Reservations & Information</div>
        <div>
          <a className="address" href="tel:214-741-1901">
            214-741-1901
          </a>
        </div>
      </footer>
    </div>
  );
}
