import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Menu from "./components/menu/Menu";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className="pm-site">
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/menu/" component={Menu} />
        </Switch>

        {/* <LandingPage /> */}
      </div>
    </Router>
  );
}

export default App;
