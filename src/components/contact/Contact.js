import React from "react";
import "./Contact.scss";
const PhoneNumber = <a href="tel:214-741-1901">214-741-1901</a>;

export default function Contact(props) {
  return (
    <div className="contact-page">
      <div className="background" />
      <div className="filter" />
      <div className="contact-info">
        <div>Get In Touch</div>
        <div>Reservations</div>
        <div>&</div>
        <div>Questions</div>
        <div>{PhoneNumber}</div>
        <div>Catering</div>
        <div>&</div>
        <div>Event Hosting</div>
        <div>{PhoneNumber}</div>
        <div>Hours</div>
        <div>Mon & Tue || 11am - 3pm</div>
        <div>Wed & Thu || 11am - 10pm</div>
        <div>Fri & Sat || 11am - 11pm</div>
        <div>Sun || 11am - 5pm</div>
        <div>Location</div>
        <div>Deep in the heart of the historic Deep Ellum District</div>
        <div>2911 Elm Street, Dallas, Texas 75226</div>
      </div>
    </div>
  );
}
