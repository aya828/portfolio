import React, { Component } from 'react';
// import { Link, animateScroll as scroll } from "react-scroll";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Section from "./components/navbar/section";
import Images from "./components/carousel/carousel"
import Footer from "./components/footer/footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Images />
        <Section
          title="Home"
          body={<Home />}
          id="home"
        />
        <Section
          title="Portfolio"
          body={<Portfolio />}
          id="portfolio"
        />
        <Section
          title="Contact"
          body={<Contact />}
          id="contact"
        />
        <Footer />
      </div>
    );
  }
}

export default App;
