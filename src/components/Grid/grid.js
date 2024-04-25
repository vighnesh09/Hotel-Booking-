import React from "react";
import hotels from "../Hotels/hotels";
import { Link } from "react-router-dom";
import "./grid.css"; // Import your CSS file

const Hotel = ({ hotel }) => (
  <div className="hotel-card">
    <div className="hotel-content">
      <img src={hotel.image} alt={hotel.name} className="hotel-image" />
      <div className="hotel-details">
        <h2 className="hotel-title">{hotel.name}</h2>
        <p className="hotel-price">{hotel.price}</p>
        <p className="hotel-description">{hotel.description}</p>
        {/* <button className="book-now-button">Book Now</button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
          <Link className="book-now-butto" to="hdetails">
            Book Now
          </Link>
        {/* <div/> */}
      </div>
    </div>
  </div>
);

const HotelGrid = () => (
  <div className="grid-container">
    {hotels.map((hotel, index) => (
      <Hotel key={index} hotel={hotel} />
    ))}
  </div>
);

export default HotelGrid;
