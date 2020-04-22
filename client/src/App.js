import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Section from "./components/navbar/section";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="Home"
          subtitle={Home}
          id="home"
        />
        <Section
          title="Portfolio"
          subtitle={Portfolio}
          id="portfolio"
        />
        <Section
          title="Contact"
          subtitle={Contact}
          id="contact"
        />
      </div>
    );
  }
}

export default App;
