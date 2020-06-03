import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue darker-5">
          <div className="nav-wrapper">
            <a href="/" className="center brand-logo">
              Users
            </a>
            <ul className="right">
              <li>
                <Link to="/">
                  <i className="fa fa-home" /> Home
                </Link>
              </li>
              <li>
                <Link to="/users">
                  <i className="fa fa-users" /> Users
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="fa fa-info" /> About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
