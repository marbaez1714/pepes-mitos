import React from "react";
import "./Contact.scss";
import GoogleMapReact from "google-map-react";



const BlueCorner = ({position}) =>{
  return(
    <div className={`blueCorner ${position}`}>
      <svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'>
        <g fill="#5bc6cc" pointerEvents='none'>
          <rect x='79' width='41' height='40' />
          <rect y='79' width='40' height='41' />
          <rect width='80' height='80' />
          <rect y='119' width='20' height='21' />
          <rect x='119' width='21' height='20' />
        </g>
      </svg>
    </div>
  )
}


const PhoneNumber = <a href="tel:214-741-1901">214-741-1901</a>;

export default function Contact(props) {
  const API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const center = {
    lat: 32.7850889,
    lng: -96.7819163,
  };
  return (
    <div className="contact-page">
      <div className="background" />
      <div className="filter" />
      <div className="contact-info">
        <div className='page-title'>Get In Touch</div>
        <div className='section-title'>Questions & Reservations</div>
        <div>{PhoneNumber}</div>
        <div className='section-title'>Catering & Events</div>
        <div>{PhoneNumber}</div>
        <div className='section-title'>Hours</div>
        <div>Mon & Tue || 11am - 3pm</div>
        <div>Wed & Thu || 11am - 10pm</div>
        <div>Fri & Sat || 11am - 11pm</div>
        <div>Sun || 11am - 5pm</div>
        <div className='section-title'>Location</div>
        <div className="location">Deep in the heart of the historic Deep Ellum District</div>
        <div>2911 Elm Street, Dallas, Texas 75226</div>
        <div className="map-wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA8bBGIaExp9QIJKSBA-hddWgnR2QTlvOQ" }}
            defaultCenter={center}
            defaultZoom={17}
          >
            <div
              lat={center.lat}
              lng={center.lng}
              text="location"
              className="pm-badge" />

          </GoogleMapReact>
        </div>
        <BlueCorner position="top left" />
        <BlueCorner position="top right" />
        <BlueCorner position="bottom left" />
        <BlueCorner position="bottom right" />

      </div>
    </div>
  );
}
