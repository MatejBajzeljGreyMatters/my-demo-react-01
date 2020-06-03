import React, { Component } from "react";
import axios from "axios";
import User from "./User";
import { C } from "../helpers/utils";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = async () => {
    this.getUsers();
    console.log("Users in state", this.state.users);
  };

  getUsers = async () => {
    try {
      console.log(C.API_URL + C.API_PATH_USERS);
      const res = await axios.get(C.API_URL + C.API_PATH_USERS);
      console.log("Users response from axios", res);
      this.setState({ users: res.data }, () => {
        console.log("Get from state in calback", this.state);
      });
      // return users.data;
    } catch (error) {
      console.log("Users error from axios", error);
      //return null;
    }
  };

  render() {
    const users = this.state.users.map((user, i) => {
      return <User key={user.id} user={user} />;
    });

    return (
      <div>
        <h1>Users</h1>
        <ul className="collection">{users}</ul>
      </div>
    );
  }
}

export default Users;
