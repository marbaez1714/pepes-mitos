import React from "react";
import "./Contact.scss";
import GoogleMapReact from "google-map-react";

const Pipe = <span className="section-pipe">||</span>
const PhoneNumber = <div><a href="tel:214-741-1901">214-741-1901</a></div>;
const Hours = (
  <React.Fragment>
    <div className='section-title'>Hours</div>
    <div>Mon. & Tue. {Pipe} 11am - 3pm</div>
    <div>Wed. & Thu. {Pipe} 11am - 10pm</div>
    <div>Fri. & Sat. {Pipe} 11am - 11pm</div>
    <div>Sun. {Pipe} 11am - 5pm</div>
  </React.Fragment>
)
const Location = (
  <React.Fragment>
    <div className='section-title'>Location</div>
    <div className="location">Downtown Dallas, deep in the heart of the historic Deep Ellum District</div>
    <a href='https://goo.gl/maps/pEJBpcGrtMF4rEic8' target="_blank" rel="noopener noreferrer">2911 Elm Street, Dallas, Texas 75226</a>
  </React.Fragment>
)





export default function Contact(props) {
  const API_KEY = process.env.REACT_APP_MAP_API_KEY;
  const center = {
    lat: 32.7850889,
    lng: -96.7819163,
  };
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
    let marker = new maps.Marker({position: center, map: map})
    let infowindow = new  maps.InfoWindow({
      content: "<p class='map-name'>Pepe's & Mito's</p><a class='map-address' href='https://goo.gl/maps/pEJBpcGrtMF4rEic8' target='_blank'>2911 Elm St</a>"
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  };
  return (
    <div className="contact-page">
      <div className="background" />
      <div className="filter" />
      <div className="contact-info">
        <div className='page-title'>Get In Touch</div>
        {Hours}
        <div className='section-title'>Catering & Events</div>
        {PhoneNumber}
        <div className='section-title'>Questions & Reservations</div>
        {PhoneNumber}
        {Location}
        <div className="map-wrapper">
          <GoogleMapReact
            bootstrapURLKeys={{ key: API_KEY }}
            defaultCenter={center}
            defaultZoom={17}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
         />
        </div>
        {/*<BlueCorner position="top left" />*/}
        {/*<BlueCorner position="top right" />*/}
        {/*<BlueCorner position="bottom left" />*/}
        {/*<BlueCorner position="bottom right" />*/}

      </div>
    </div>
  );
}
