import React from "react";
import Header from "./components/Header";
import Menu from "./components/menu/Menu";
import Sidesheet from "./components/sidesheet/Sidesheet";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="pm-site">
      <Header />
      <Sidesheet />
      <Menu />
      {/* <LandingPage /> */}
    </div>
  );
}

export default App;
