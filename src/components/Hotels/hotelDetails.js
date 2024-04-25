import React, { useState } from "react";
import "./HotelDetails.css";
import hotels from "./hotels"; // Importing hotels data

const HotelDetails = () => {
  const hotel = hotels[0]; // Using data for "Hotel 1"
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(parseInt(e.target.value));
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(parseInt(e.target.value));
  };

  return (
    <div className="hotel-details-container">
      <div className="hotel-details">
        <img src={hotel.image} alt={hotel.name} className="hotel-image" />
        <div className="hotel-info">
          <h2 className="hotel-name">{hotel.name}</h2>
          <p className="hotel-price">{hotel.price}</p>
          <p className="hotel-description">{hotel.description}</p>
        </div>
      </div>
      <div className="booking-options">
        <h3>Reservation Details</h3>
        <div className="input-group">
          <label>Check-In Date:</label>
          <input
            type="date"
            value={checkInDate}
            onChange={handleCheckInDateChange}
          />
        </div>
        <div className="input-group">
          <label>Check-Out Date:</label>
          <input
            type="date"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
          />
        </div>
        <div className="input-group">
          <label>Adults:</label>
          <input
            type="number"
            min="1"
            value={numAdults}
            onChange={handleNumAdultsChange}
          />
        </div>
        <div className="input-group">
          <label>Children:</label>
          <input
            type="number"
            min="0"
            value={numChildren}
            onChange={handleNumChildrenChange}
          />
        </div>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelDetails;
