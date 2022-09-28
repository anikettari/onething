import React from "react";
import Carousel from "react-bootstrap/Carousel";
import reward from "./Images/reward.png";

const Reqardcarousel = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={reward}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={reward}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={reward}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reqardcarousel;
