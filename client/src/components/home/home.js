import React from "react";
import "./home";

function Home() {
  return(
    <body>
      <div className="container">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
                <h2>About Me</h2>
            </div>
            <hr width="1100" />
        </div>
        <div className="row">
          <div className="col-12 col-md-10 col-lg-12">
            <img id="me" src="./images/IMG_1146.jpeg" width="250" alt="me"/>
            <img id="baxter" src="./images/B3FC57DA-EFB0-4079-A41F-714EE17A4C25.jpeg" width="350" alt="baxter"/>
            <p className="text">
              I was born in New Jersey and raised both in NJ and Tokyo, Japan. I studied Journalism for undergrad
              at Brooklyn College and earned a Bachelor’s degree. I then started working retail at Apple then
              transitioned into technical support at Apple, where my interest grew for technology.
            </p>
            <p>
              I became a Systems Administrator and soon found that a Systems Administrator
              was not something I wanted to be. I found the GWU Coding Bootcamp online and decided to take this
              step towards becoming a web developer!
            </p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home;