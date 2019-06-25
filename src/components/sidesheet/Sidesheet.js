import React from "react";
import ReactDOM from "react-dom";
import "./sheet-styles.scss";

function SideSheetContent(props) {
  const { open } = props;

  return (
    <div className={`overlay ${open ? "open" : ""}`}>
      <div className="sheetContainer">
        <button className="closeButton">
          <i class="fas fa-times" />
        </button>
        <ul className="sideOptions">
          <li>Home</li>
          <li>Menu</li>
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
