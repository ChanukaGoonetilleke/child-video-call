import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Call from "./pages/Call";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/schedule">
            <Schedule />
          </Route>
          <Route path="/call">
            <Call />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
