import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <div className="col-4">
            <Card style={({ width: "18rem" }, { border: "none" })}>
              <Card.Body>
                <Card.Title>COMMUTE\buddy\</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  A commuting application for everyone{" "}
                </Card.Subtitle>
                <Card.Img variant="top" src="./images/commuteBuddy.png" />
                <Card.Link
                  target="_blank"
                  href="https://magiama9.github.io/commute-buddy/"
                >
                  Live Website
                </Card.Link>
                <Card.Link
                  target="_blank"
                  href="https://github.com/aya828/commute-buddy/"
                >
                  GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={({ width: "18rem" }, { border: "none" })}>
              <Card.Body>
                <Card.Title>BidBot</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Auction site to post, bid, and search!{" "}
                </Card.Subtitle>
                <Card.Img variant="top" src="./images/bidbot.png" />
                <Card.Link
                  target="_blank"
                  href="https://bidbot-auction.herokuapp.com/"
                >
                  Live Website
                </Card.Link>
                <Card.Link
                  target="_blank"
                  href="https://github.com/aya828/bit-bot"
                >
                  GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-4">
            <Card style={({ width: "18rem" }, { border: "none" })}>
              <Card.Body>
                <Card.Title>Recipe Room</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Creation, storage, and viewing of cocktail recipes.
                </Card.Subtitle>
                <Card.Img variant="top" src="./images/reciperoom.png" />
                <Card.Link
                  target="_blank"
                  href="https://secure-depths-48427.herokuapp.com/"
                >
                  Live Website
                </Card.Link>
                <Card.Link
                  target="_blank"
                  href="https://github.com/mhitchi/group-2"
                >
                  GitHub
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Portfolio;
