import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount = async () => {
    await this.getUsers();
    console.log("Users in state", this.state.users);
  };

  getUsers = async () => {
    try {
      const res = await axios.get(
        "https://5ed7873c152c310016d851c7.mockapi.io/users"
      );
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
      return (
        <li key={user.id}>
          {user.name}, {user.address + " - " + user.city}{" "}
        </li>
      );
    });

    return (
      <div>
        <h1>Users</h1>
        {users}
      </div>
    );
  }
}

export default Users;
