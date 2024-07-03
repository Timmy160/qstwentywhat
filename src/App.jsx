import "./App.css";
import React from "react";
import Navbar from "./Component/Navbar";
import Advertising from "./Pages/Advertising/Advertising";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
