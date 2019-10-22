import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";

import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import Tour from "./components/tour/Tour";
import "./App.scss";

function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [location, setLocation] = useState("/");

  const toggleSheet = () => setSheetOpen(!sheetOpen);
  const handleChange = page => {
    setSheetOpen(!sheetOpen);
    setLocation(page);
  };

  return (
    <Router>
      <Header
        open={sheetOpen}
        handleOpen={toggleSheet}
        location={location}
        handleChange={handleChange}
      />
      <div className={`pm-site ${sheetOpen ? "sheetOpen" : ""}`}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/menu/" component={Menu} />
          <Route path="/contact/" component={Contact} />
          <Route path="/tour/" component={Tour} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
