import React from "react";
import Navbar from "./Components/Navbar";
import "../src/style.css";
import Getstarted from "./Components/Getstarted";
import Frequently from "./Components/Frequently";
import Button from "./Components/Button";

const App = () => {
  return (
    <div>
      <Navbar />
      <Getstarted />
      <Frequently />
    </div>
  );
};

export default App;
