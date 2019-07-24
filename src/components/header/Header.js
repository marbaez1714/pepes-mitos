import React from "react";
import Sidesheet from "../sidesheet/Sidesheet";
import "./Header.scss";

export default function Header(props) {
  const { open, handleOpen, location, handleChange } = props;

  return (
    <header className={`headerContainer ${open ? "sheetOpen" : ""}`}>
      <span className="headerTitle">Pepe's & Mito's</span>
      <div className="pm-badge"/>
      <button onClick={handleOpen} className="sidesheetButton">
        <i class="fas fa-bars" />
      </button>
      <Sidesheet
        open={open}
        handleClose={handleOpen}
        location={location}
        handleChange={handleChange}
      />
    </header>
  );
}
