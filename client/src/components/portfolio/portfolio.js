import React from "react";
// import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import HoverImage from "react-hover-image"
import "./portfolio";

function Portfolio() {
  return (
    <body>
      <div className="container">
      <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
                <h2>Portfolio</h2>
            </div>
            <hr width="1100" />
        </div>
        <div className="row">
          <div className="col-6">
          <HoverImage
            className="d-block w-100"
            src="./images/commuteBuddy.png"
            hoverSrc={"https://magiama9.github.io/commute-buddy/"}
          />
          <div className="inner-div">
            <p>COMMUTE\buddy\: a commuting application for everyone. </p>
            <p>
              Live Website:{" "}
              <a href="https://magiama9.github.io/commute-buddy/">
                COMMUTE\buddy\
              </a>
            </p>
            <p>
              GitHub Code:{" "}
              <a href="https://github.com/aya828/commute-buddy/">
                COMMUTE\buddy\
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
    </body>
  );
}

export default Portfolio;
