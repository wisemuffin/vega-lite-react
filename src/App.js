import React, { useEffect, useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import { VegaLite } from "react-vega";
import logo from "./logo.svg";
import "./App.css";

import BasicExamples from "./pages/BasicExamples";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={BasicExamples} />
      </Switch>
    </Router>
  );
}

export default App;
