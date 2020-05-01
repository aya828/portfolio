import React from "react";
import { Carousel } from "react-bootstrap";
import "./carousel.css";

function Images() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/commute.png"
          alt="Commute\buddy\: a commuting app for everybody"
        />
        <Carousel.Caption>
          <h3 className="h3">Commute\buddy\</h3>
          <p className="info">A commuting app for everybody.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/hotrestaurant.png"
          alt="Hot Restaurant"
        />

        <Carousel.Caption>
          <h3 className="h3">Hot Restaurant</h3>
          <p className="info">Make reservations at the hottest restaurant in town!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/liri.png"
          alt="Liri Bot"
        />

        <Carousel.Caption>
          <h3 className="h3">Liri Bot</h3>
          <p className="info">
            Search concerts, music, and more!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/note.png"
          alt="Note Taker"
        />

        <Carousel.Caption>
          <h3 className="h3">Note Taker</h3>
          <p className="info">
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/password.png"
          alt="Password Generator"
        />

        <Carousel.Caption>
          <h3 className="h3">Password Generator</h3>
          <p className="info">
            Generate complex passwords!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/planner.png"
          alt="Planner"
        />
        <Carousel.Caption>
          <h3 className="h3">Day Planner</h3>
          <p className="info">
            Never forget your important events!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/reciperoom.png"
          alt="Recipe Room"
        />
        <Carousel.Caption>
          <h3 className="h3">Recipe Room</h3>
          <p className="info">
          Create, store, and view different cocktail recipes.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Images;
