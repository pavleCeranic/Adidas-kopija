import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import style from "./Test.module.css";

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={style["carousel-item"]}>
          <img
            className="d-block "
            src="https://images.pexels.com/photos/4987522/pexels-photo-4987522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/4987522/pexels-photo-4987522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/4987522/pexels-photo-4987522.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style["carousel-item"]}>
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7880001/pexels-photo-7880001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7880001/pexels-photo-7880001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7880001/pexels-photo-7880001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style["carousel-item"]}>
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7153859/pexels-photo-7153859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7153859/pexels-photo-7153859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
          <img
            className="d-block "
            src="https://images.pexels.com/photos/7153859/pexels-photo-7153859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="Third slide"
          />
        </div>
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
export default CarouselComponent;
