import React, { useState, useEffect } from "react";
import hotels from "../Hotels/hotels.js";
import { Carousel } from "react-bootstrap";
import HotelList from "../seeMore/seeMore.js";
import HotelGrid from "../Grid/grid.js";
import HotelDetails from "../Hotels/hotelDetails.js";

const SliderComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % hotels.length);
    }, 3000); // Change the delay as per your requirement (in milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Carousel activeIndex={activeIndex} onSelect={() => {}}>
        {hotels.map((hotel, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={hotel.image}
              alt={`Slide ${index + 1}`}
              style={{ height: "700px" }} // Adjust the height as needed
            />
            <Carousel.Caption>
              <h3>{hotel.name}</h3>
              <p>{hotel.description}</p>
              <br></br>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <br></br>
        <HotelList />
        <br></br>
      </div>
      <div>
        <br></br>
        <HotelDetails />
        <br></br>
      </div>
    </>
  );
};

export default SliderComponent;
