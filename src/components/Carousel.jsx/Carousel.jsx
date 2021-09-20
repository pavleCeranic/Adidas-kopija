import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

export const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/6344225/pexels-photo-6344225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex flex-row  w-40"
          src="https://images.pexels.com/photos/3964461/pexels-photo-3964461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Second slide"
        />
        <img
          //   className="d-flex flex-row  w-40"
          src="https://images.pexels.com/photos/7153859/pexels-photo-7153859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/7153859/pexels-photo-7153859.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
