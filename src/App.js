import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MythBuster from "./components/MythBuster";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/myth-buster" component={MythBuster} />
      </Switch>
    </>
  );
}

export default App;
