import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import UserProfile from "./UserProfile";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/:id" component={UserProfile} />
      <Route exact path="/about" component={About} />
    </Switch>
  </main>
);

export default Main;
