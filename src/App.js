import React from "react";
import "./styles.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
      <div className="fixed-action-btn">
        <Link to="/users/add" className="btn-floating btn-large btn-blue">
          <i className="fa fa-plus" />{" "}
        </Link>
      </div>
    </div>
  );
};

export default App;
