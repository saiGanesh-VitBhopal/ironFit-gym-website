import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Ironfit <span>Elite</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#trainers">Trainers</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a href="#contact">
        <button className="join-btn">Join Now</button>
      </a>
    </nav>
  );
};

export default Navbar;
