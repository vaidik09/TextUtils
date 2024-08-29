import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode === "dark" ? "white" : "black"}  mx-0`}
      style={{ backgroundColor: props.mode === "dark" ? "black" : "#afafc7" }}
    >
      <div className="container-fluid">
        <a
          className={`navbar-brand mx-3 text-${props.mode === "dark" ? "white" : "black"}`}
          href="/"
        >
          {props.title}
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className={`nav-link text-${props.mode === "dark" ? "white" : "black"}`}
                to="/ "
              >
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link text-${props.mode === "dark" ? "white" : "black"}`}
                to="/about"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <div className="bg-primary rounded mx-2" onClick={()=>{props.coloredTheme('primary')}} style={{height:"30px",width:'30px', cursor:'pointer'}}></div>
          <div className="bg-danger rounded mx-2" onClick={()=>{props.coloredTheme('danger')}} style={{height:"30px",width:'30px', cursor:'pointer'}}></div>
          <div className="bg-warning rounded mx-2" onClick={()=>{props.coloredTheme('warning')}} style={{height:"30px",width:'30px', cursor:'pointer'}}></div>
        </div>
        <div
          className={`form-check form-switch text-${props.mode === "dark" ? "white" : "black"}`}
        >
          <input
            onClick={props.toggleMode}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
      </div>
    </nav>
  );
}
