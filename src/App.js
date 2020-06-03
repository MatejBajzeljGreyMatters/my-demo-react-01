import React from "react";
import "./styles.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default App;
