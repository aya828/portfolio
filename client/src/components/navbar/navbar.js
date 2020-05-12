import React, { Component } from "react";
// import logo from "../../logo.png";
import { Link, animateScroll as scroll } from "react-scroll";
import "./navbar.css";

class Navbar extends Component {
  

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      // <nav className="navbar" id="navbar">
      <div className="navbar fixed-top nav-content">
        <ul className="nav-items">
          <p className="name">Aya Yoshida
          </p>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    // </nav>
    );
  }
}

export default Navbar;
