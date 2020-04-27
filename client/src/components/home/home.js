import React from "react";
import "./home";

function Home() {
  return(
    <body>
      <div className="container">
        <h2 className="intro">Hello, my name is Aya. I am a web deveoper living in Alexandria, VA.</h2>
        <br></br>
        <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
                {/* <h2>About</h2> */}
            </div>
            <hr width="1100" />
        </div>
        <div className="row">
          <div className="col-12 col-md-10 col-lg-12">
            {/* <img id="me" src="./images/IMG_1146.jpeg" width="250" alt="me"/>
            <img id="baxter" src="./images/B3FC57DA-EFB0-4079-A41F-714EE17A4C25.jpeg" width="350" alt="baxter"/> */}
            <p className="text">
              I was born in New Jersey and raised both in NJ and Tokyo, Japan. I studied Journalism for my undergrad
              at Brooklyn College and earned a Bachelor’s degree. I then started working retail at Apple then
              transitioned into technical support at Apple, where my interest grew for technology.
            </p>
            <p className="text">
              I became a Systems Administrator and became more interested in learning about software development. I found the George Washington University Full Stack Web Development Coding Bootcamp online and decided to take this
              step towards becoming a web developer!
            </p>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Home;