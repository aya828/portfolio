import React from "react";
import "./portfolio";

function Portfolio() {
  return(
    <body>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h2>Portfolio</h2>
          </div>
          <hr width="1100" />
        </div>
        <div className="row img-block">
          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/commuteBuddy.png" width="350"
            />
            <div className="inner-div">
              <p>COMMUTE\buddy\: a commuting application for everyone. </p>
              <p>Live Website: https://magiama9.github.io/group-project-01/</p>
              <p>GitHub Code: https://github.com/magiama9/group-project-01</p>
              
            </div>
          </div>
          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/IMG_0962.jpg" className="" width="350" />
            <div className="inner-div">
              <p className="img-text">What?</p>
            </div>
          </div>
          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/IMG_1043.jpg" width="350" />
            <div className="inner-div">
              <p className="img-text">Happy</p>
            </div>
          </div>

          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/IMG_1224.jpg" width="350" />
            <div className="inner-div">
              <p className="img-text">Roarrr!!</p>
            </div>
          </div>

          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/IMG_1243.jpg" width="350" />
            <div className="inner-div">
              <p className="img-text">Happy Halloween!</p>
            </div>
          </div>
          <div className="col-6">
            <img className="port-img rounded img-fluid" src="assets/images/IMG_1275.jpg" width="350" />
            <div className="inner-div">
              <p className="img-text">Tired</p>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Portfolio;