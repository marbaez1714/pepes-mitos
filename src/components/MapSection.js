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
      <span className="title text">Location</span>
      <span className="address text">2911 Elm Street, Dallas, Texas 75226</span>
      <div className="mapWrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={center}
          defaultZoom={17}
        />
      </div>
      <svg className="blueCorner top left" width="160" height="160" viewBox="0 0 160 160">
        <g fill="#5bc6cc" pointerEvents="none">
          <rect y="80" width="80" height="80" />
          <rect x="80" width="80" height="80" />
          <rect x="40" y="40" width="120" height="120" />
        </g>
      </svg>
      <svg className="blueCorner top right" width="160" height="160" viewBox="0 0 160 160">
        <g fill="#5bc6cc" pointerEvents="none">
          <rect y="80" width="80" height="80" />
          <rect x="80" width="80" height="80" />
          <rect x="40" y="40" width="120" height="120" />
        </g>
      </svg>
      <svg className="blueCorner bottom left" width="160" height="160" viewBox="0 0 160 160">
        <g fill="#5bc6cc" pointerEvents="none">
          <rect y="80" width="80" height="80" />
          <rect x="80" width="80" height="80" />
          <rect x="40" y="40" width="120" height="120" />
        </g>
      </svg>
      <svg className="blueCorner bottom right" width="160" height="160" viewBox="0 0 160 160">
        <g fill="#5bc6cc" pointerEvents="none">
          <rect y="80" width="80" height="80" />
          <rect x="80" width="80" height="80" />
          <rect x="40" y="40" width="120" height="120" />
        </g>
      </svg>
    </div>
  );
}
