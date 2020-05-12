import React from "react";
import "./home";

function Home() {
  return (
    <body>
      <div className="container">
        <h2>About</h2>
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
              I was born in New Jersey and raised both in NJ and Tokyo, Japan. I
              studied Journalism for my undergrad at Brooklyn College and earned
              a Bachelor’s degree. I began working retail at Apple then
              transitioned into technical support at Apple, where my interest
              grew for technology. I am currently pursuing my Master's Degree in
              Cybersecurity at Marymount University in Arlington.
            </p>
            <p className="text">
              While working as a Systems Administrator, in both the private sector and on Capitol Hill, I gained an interest in software development. I completed the George Washington
              University Full Stack Web Development Coding Bootcamp and am now pursuing my career in web development.
            </p>
            <p className="text">
              I have experience in HTML, CSS, Bootstrap, JavaScript, JQuery, React.js, Node.js, Express.js, MySQL, MongoDB, responsive designs,
              and Git.
            </p>
            <p className="text">
              When I'm not coding and designing, I enjoy making jewelry, working out, kickboxing, cooking, or playing with my two pups Baxter and Jackson.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
