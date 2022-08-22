import React, { Link } from "react";
import "../Styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo"> Portfolio</div>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Project
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Contact
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="#">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
