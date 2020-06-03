import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserAdd extends Component {
  constructor() {
    super();
    this.inputName = React.createRef();
    this.inputCity = React.createRef();
    this.inputAddress = React.createRef();
  }

  addUser(newUser) {
    console.log("onSubmit clicked", newUser);
  }

  onSubmit(e) {
    const newUser = {
      id: null,
      name: this.inputName.current.value,
      city: this.inputCity.current.value,
      address: this.inputAddress.current.value
    };

    this.addUser(newUser);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/users" className="btn grey left">
          Back
        </Link>
        <br />
        <h3>Add User</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref={this.inputName} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input type="text" name="city" ref={this.inputCity} />
            <label htmlFor="city">City</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref={this.inputAddress} />
            <label htmlFor="address">Address</label>
          </div>
          <input type="submit" value="Save" className="btn green" />
        </form>
      </div>
    );
  }
}

export default UserAdd;
