import React from "react";
import "./Contact.scss";
import GoogleMapReact from "google-map-react";

const Pipe = <span className="section-pipe">||</span>;


export default function Contact(props) {
  const API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const center = {
    lat: 32.7850889,
    lng: -96.7819163
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    let marker = new maps.Marker({ position: center, map: map });
    let infowindow = new maps.InfoWindow({
      content:
        "<p class='map-name'>Pepe's & Mito's</p><a class='map-address' href='https://goo.gl/maps/pEJBpcGrtMF4rEic8' target='_blank'>2911 Elm St</a>"
    });
    marker.addListener("click", function() {
      infowindow.open(map, marker);
    });
  };
  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="section-title yellow">
          <p className="title">Hours</p>
        </div>
        <div className="section-content">
          <div>Mon. & Tue. {Pipe} 11am - 3pm</div>
          <div>Wed. & Thu. {Pipe} 11am - 10pm</div>
          <div>Fri. & Sat. {Pipe} 11am - 11pm</div>
          <div>Sun. {Pipe} 11am - 5pm</div>
        </div>
      </div>
      <div className="contact-section">
        <div className="section-title phone blue">
          <p className="title">Phone Number</p>
        </div>
        <div className="section-content">
          For reservations, catering, events, and all other questions, call :
          <a href="tel:214-741-1901">214-741-1901</a>
        </div>
      </div>
      <div className="contact-section">
        <div className="section-title orange">
          <p className="title">Location</p>
        </div>
        <div className="section-content">
          <div>Deep in the heart of the historic Deep Ellum District</div>
          <a
            href="https://goo.gl/maps/pEJBpcGrtMF4rEic8"
            target="_blank"
            rel="noopener noreferrer"
          >
            2911 Elm Street
          </a>
        </div>
      </div>
      <div className="contact-section">
        <div className="section-title green">
          <p className="title">Map</p>
        </div>
        <div className="section-content">
          <div className="map-wrapper">
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              defaultCenter={center}
              defaultZoom={17}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
