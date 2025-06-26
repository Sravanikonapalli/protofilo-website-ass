import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/navbar.css'; 
import { CiDark,CiLight } from "react-icons/ci";

const Navbar = ({darkMode,handleToggle}) => {
  return (
       <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          ANISH KUMAR SINHA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto ">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Resume
            </a>
            <a className="nav-link" href="#">
              Skills
            </a>
            <a className="nav-link" href="#">
              Project
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>

          <button
              className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
              onClick={handleToggle}
            >
              {darkMode ? <CiLight size={25} className="mode-icons-light"/> : <CiDark size={25}  className="mode-icons-dark"/>}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
