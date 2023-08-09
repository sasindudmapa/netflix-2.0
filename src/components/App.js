import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Home/HomePage";
import Details from "./Routes/Details";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/movie">
            <Details />
          </Route>
          <Route path="/user">
            <h1>This is the Account Page</h1>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//API KEY = 0011195c1370cf6aacc00fd083a0c318
