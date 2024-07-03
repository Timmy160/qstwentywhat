import React from "react";
import "./Navbar.css";
import qs_logo1 from "../Assets/Images/qs_logo1.png";
import qs_logo2 from "../Assets/Images/qs_logo2.png";
import qs_logo3 from "../Assets/Images/qs_logo3.png";

function Navbar() {
  return (
    <div>
      <nav className="NavBar">
        <div className="logo_name">
          <img src={qs_logo3} className="logo_img" />
          <span className="QsTwentyWhat">QsTwenty_What </span>
        </div>
        <div className="Links">
          <p>Login</p>
          <p>Dealer Login</p>
          <p>Register</p>
        </div>
        <div className="Links">
          <a href="">Advertising</a>
          <a href="">Contact Us</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
