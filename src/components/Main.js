import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Users from "./Users";
import UserProfile from "./UserProfile";
import UserAdd from "./UserAdd";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/add" component={UserAdd} />
      <Route exact path="/users/:id" component={UserProfile} />
    </Switch>
  </main>
);

export default Main;
