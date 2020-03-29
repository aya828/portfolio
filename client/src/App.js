import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";
import Contact from "./components/contact/contact";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Wrapper>
    </div>
  </Router>
  );
}

export default App;
