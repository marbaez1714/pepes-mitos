import React, { useState } from "react";
import Sidesheet from "./sidesheet/Sidesheet";
import "./Header.scss";

export default function Header(props) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const toggleSheet = () => setSheetOpen(!sheetOpen);

  return (
    <header className={`headerContainer ${sheetOpen ? "sheetOpen" : ""}`}>
      <span className="headerTitle">Pepe's & Mito's</span>
      <button onClick={toggleSheet} className="sidesheetButton">
        <i class="fas fa-bars" />
      </button>
      <Sidesheet open={sheetOpen} handleClose={toggleSheet} />
    </header>
  );
}
