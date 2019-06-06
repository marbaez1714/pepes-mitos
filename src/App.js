import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import "./App.scss";

function App() {
  return (
    <div className="pm-site">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
