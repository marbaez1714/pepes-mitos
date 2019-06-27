import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Sidesheet.scss";

function SideSheetContent(props) {
  const { open, handleClose } = props;

  return (
    <div className={`overlay ${open ? "open" : ""}`}>
      <div className="sheetContainer">
        <button className="closeButton" onClick={handleClose}>
          <i class="fas fa-times" />
        </button>
        <ul className="sideOptions">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu/">Menu</Link>
          </li>
          <li>About Us</li>
          <li>Tour</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </div>
    </div>
  );
}

export default function Sidesheet(props) {
  return ReactDOM.createPortal(<SideSheetContent {...props} />, document.body);
}
