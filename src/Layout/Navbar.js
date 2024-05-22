import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src="saga img.png" alt="" className="navbar-logo" width="70" height="50" />

        <a className="navbar-brand ms-2" href="#">
          redux-saga
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto me-5">
            <li className="nav-item active">
              <a className="nav-link" href="/form">
                Redux-Form
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/table">
                Redux-Table
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
