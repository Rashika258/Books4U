import React from "react";
import { Carousel } from "react-bootstrap";
import book1 from "../static/images/car1.jpg";
import book2 from "../static/images/car2.jpg";
import book3 from "../static/images/car3.jpg";


function CarouselComponent() {
  return (
    <Carousel fade style={{ width: "100%", height: "450px" }}>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "450px", opacity: "0.78" }}
          className="d-block w-100"
          src={book1}
          alt="First slide"
        />

        <Carousel.Caption>
          <h3 style={{ fontWeight: "800", fontSize: "50px", color: "#1B1A17" }}>
            Books let you travel without moving your feet
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "450px" , opacity: "0.78" }}
          className="d-block w-100"
          src={book2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ fontWeight: "800", fontSize: "50px", color: "#1B1A17" }}>
            The library is inhabited by spirits that come out of the pages at
            night
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%", height: "450px" , opacity: "0.78"}}
          className="d-block w-100"
          src={book3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ fontWeight: "800", fontSize: "50px", color: "#1B1A17" }}>
            A half-read book is a half-finished love affair.
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
