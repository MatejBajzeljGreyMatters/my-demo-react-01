import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { C } from "../helpers/utils";
import Loader from "./Loader";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null
    };
  }

  componentDidMount = async () => {
    await this.getUser();
  };

  getUser = async () => {
    try {
      let userId = this.props.match.params.id;
      const res = await axios.get(C.API_URL + C.API_PATH_USERS + userId);
      console.log("User details response from axios", res);
      this.setState({ details: res.data });
    } catch (error) {
      console.log("Users error from axios", error);
    }
  };

  render() {
    const user = this.state.details;
    if (user) {
      return (
        <div>
          <br />
          <Link to="/users" className="btn grey left">
            Back
          </Link>
          <br />
          <h2>{user.name}</h2>
          <ul className="collection">
            <li className="collection-item">Address: {user.address}</li>
            <li className="collection-item">
              City: {user.zipCode} {user.city}
            </li>
          </ul>
          <Link className="btn" to={`/users/edit/${user.id}`}>
            Edit
          </Link>
          <button className="btn red right">Delete</button>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <Loader />
        </div>
      );
    }
  }
}

export default UserProfile;
