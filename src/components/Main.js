import React from "react";
import { Switch, Route } from "react-router-dom";
import Meetups from "./Meetups";
import About from "./About";
import Home from "./Home";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/meetups" component={Meetups} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
