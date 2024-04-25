import React, { useState } from "react";
import hotels from "../Hotels/hotels";

const HotelList = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleHotels = showMore ? hotels : hotels.slice(0, 3); // Displaying 6 hotels initially

  return (
    <div className="container">
      <div className="row">
        {visibleHotels.map((hotel, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img
                className="card-img-top"
                src={hotel.image}
                alt={`Hotel ${index + 1}`}
              />
              <div className="card-body">
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.price}</p>
                <button className="btn btn-primary btn-block mb-2">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
        {!showMore && (
          <div className="col-md-12 d-flex justify-content-center">
            {" "}
            {/* Full width column for the "See More" button, horizontally centered */}
            <div className="card">
              <div className="card-body">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => setShowMore(true)}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelList;