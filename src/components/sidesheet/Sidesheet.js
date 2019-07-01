import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "./Sidesheet.scss";

function SideSheetContent(props) {
  const { open, handleClose, location, handleChange } = props;

  const links = [
    { path: "/", title: "Home" },
    { path: "/menu/", title: "Menu" },
    { path: "/about/", title: "About Us" },
    { path: "/tour/", title: "Tour" },
    { path: "/contact/", title: "Contact Us" }
  ];

  return (
    <div className={`overlay ${open ? "open" : ""}`}>
      <div className="sheetContainer">
        <button className="closeButton" onClick={handleClose}>
          <i class="fas fa-times" />
        </button>
        <ul className="sideOptions">
          {links.map(link => (
            <li
              key={link.path + link.title}
              className={`sheetLink ${location === link.path ? "current" : ""}`}
            >
              <Link to={link.path} onClick={() => handleChange(link.path)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Sidesheet(props) {
  return ReactDOM.createPortal(<SideSheetContent {...props} />, document.body);
}
