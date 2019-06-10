import React from "react";
import GoogleMapReact from "google-map-react";
import "./pm-styles.scss";

export default function MapSection(props) {
  const API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const center = {
    lat: 32.785069,
    lng: -96.7819108
  };
  return (
    <div className="parallaxSection mapContainer">
      <ul className="information address">
        <li className="address">Deep Ellum</li>
        <li className="address">2911 Elm Street</li>
        <li className="address">Dallas, Texas 75226</li>
        <li>
          <a className="phone" href="tel:214-741-1901">
            214-741-1901
          </a>
        </li>
      </ul>
      <div className="mapWrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={17}
        />
      </div>
      <ul className="information time">
        <li className="hoursTitle">
          <span className="title">Hours</span>
        </li>
        <li className="hours">
          <span className="days">Mon & Tue : 11am - 3pm</span>
        </li>
        <li className="hours">
          <span className="days">Wed & Thu : 11am - 10pm</span>
        </li>
        <li className="hours">
          <span className="days">Fri & Sat : 11am - 11pm</span>
        </li>
        <li className="hours">
          <span className="days">Sun : 11am - 5pm</span>
        </li>
      </ul>
    </div>
  );
}

//<svg className="blueCorner top left" width="160" height="160" viewBox="0 0 160 160">
//<g fill="#5bc6cc" pointerEvents="none">
//  <rect y="80" width="80" height="80" />
//  <rect x="80" width="80" height="80" />
//  <rect x="40" y="40" width="120" height="120" />
//</g>
//</svg>
//<svg className="blueCorner top right" width="160" height="160" viewBox="0 0 160 160">
//<g fill="#5bc6cc" pointerEvents="none">
//  <rect y="80" width="80" height="80" />
//  <rect x="80" width="80" height="80" />
//  <rect x="40" y="40" width="120" height="120" />
//</g>
//</svg>
//<svg className="blueCorner bottom left" width="160" height="160" viewBox="0 0 160 160">
//<g fill="#5bc6cc" pointerEvents="none">
//  <rect y="80" width="80" height="80" />
//  <rect x="80" width="80" height="80" />
//  <rect x="40" y="40" width="120" height="120" />
//</g>
//</svg>
//<svg className="blueCorner bottom right" width="160" height="160" viewBox="0 0 160 160">
//<g fill="#5bc6cc" pointerEvents="none">
//  <rect y="80" width="80" height="80" />
//  <rect x="80" width="80" height="80" />
//  <rect x="40" y="40" width="120" height="120" />
//</g>
//</svg>
