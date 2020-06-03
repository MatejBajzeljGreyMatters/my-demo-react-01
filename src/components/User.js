import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
  }

  render() {
    const user = this.state.user;
    return (
      <li className="collection-item">
        <Link to={`/users/${user.id}`}>
          <div>{user.name}</div>
          <div>{user.address + ", " + user.city} </div>{" "}
        </Link>
      </li>
    );
  }
}

export default User;
