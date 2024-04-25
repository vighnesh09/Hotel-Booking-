import React from "react";

const Footer = () => {
  const footerStyles = {
    footer: {
      backgroundColor: "#f8f9fa",
      padding: "20px", // Increase padding for larger size
    },
    text: {
      color: "#6c757d",
    },
    copyright: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  };

  return (
    <footer
      className="bg-body-tertiary text-center text-lg-start"
      style={footerStyles.footer}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>Address: CKPCET, Dumas, Surat</p>
            <p>Email: info@example.com</p>
            <p>Phone: +91 99240 15082</p>
          </div>
          <div className="col-lg-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/home">Services</a>
              </li>
              <li>
                <a href="/home">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={footerStyles.copyright}>
        <p>© 2024 HotelBooking.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
