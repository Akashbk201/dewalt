import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand">
            <img src="/dewalt2024_logo.png" alt="" />
          </a>
          <div className="mobile-nav">
            <button className="open" id="open" onClick={openClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </button>
          </div>
          <ul className="nav-icon-box" id="nav-items">
            <button className="close" id="close" onClick={closeClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
              </svg>
            </button>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#product">Products</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

const navItems = document.getElementById("nav-items");

function openClick() {
  navItems.classList.add("opn-output");
}

function closeClick() {
  navItems.classList.remove("opn-output");
}
