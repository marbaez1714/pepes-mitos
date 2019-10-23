import React from "react";
import "./Tour.scss";
import Tour1 from "../../images/tour1.jpg";
import Tour2 from "../../images/tour2.jpg";
import Tour3 from "../../images/tour3.jpg";
import Tour4 from "../../images/tour4.jpg";
import Tour5 from "../../images/tour5.jpg";
import Tour6 from "../../images/tour6.jpg";

export default function Tour(props) {
  const Pipe = <span className="section-pipe">||</span>;

  return (
    <div className="parallaxWrapper">
      {/* Section 1 */}
      <div className="section header yellow">
        <img className="tour-image" src={Tour1} alt="restaurant front" />
      </div>
      {/* Section 2 */}
      <div className="section header red">
        <img className="tour-image" src={Tour6} alt="patio" />
      </div>
      {/* Section 3 */}
      <div className="section header blue">
        <img className="tour-image" src={Tour4} alt="restaurant back" />
      </div>
      {/* Section 4 */}
      <div className="section header orange">
        <img className="tour-image" src={Tour2} alt="bar" />
      </div>
      {/* Section 5 */}
      <div className="section header green">
        <img className="tour-image" src={Tour3} alt="bar close" />
      </div>
      {/* Section 6 */}
      <div className="section header green-light">
        <img className="tour-image" src={Tour5} alt="event space" />
      </div>
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
