import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import LandingPage from "./components/landing/LandingPage";

import Menu from "./components/menu/Menu";
import Contact from "./components/contact/Contact";
import "./App.scss";

function App() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [location, setLocation] = useState("/");

  const toggleSheet = () => setSheetOpen(!sheetOpen);

  return (
    <Router>
      <Header
        open={sheetOpen}
        handleOpen={toggleSheet}
        location={location}
        handleChange={setLocation}
      />
      <div className={`pm-site ${sheetOpen ? "sheetOpen" : ""}`}>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/menu/" component={Menu} />
          <Route path="/contact/" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
