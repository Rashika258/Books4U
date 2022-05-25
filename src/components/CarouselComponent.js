import React from "react";
import { Carousel } from "react-bootstrap";
import book1 from "../static/images/book1.jpg";
import book2 from "../static/images/book2.jpg";
import book3 from "../static/images/book3.jpg";
import book4 from "../static/images/book4.jpg";
import book5 from "../static/images/book5.jpg";
import book6 from "../static/images/book6.jpg";

function CarouselComponent() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={book1} alt="First slide" />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-30" src={book2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={book3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
