import React from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import { HOME_PATH } from "./Routes";
import { LandingPage } from "./Components/LandingPage";
import { NotFound } from "./Components/404";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={HOME_PATH} component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
