import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar/navbar";
import About from "./components/About/aboutUs";
import Footer from "./components/Footer/footer";
import LoginPage from "./components/Login/login";
import SignUpPage from "./components/Login/signup";
import HotelGrid from "./components/Grid/grid";
import SliderComponent from "./components/Home/home";
import HotelDetails from "./components/Hotels/hotelDetails";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<SliderComponent />} />
        <Route path="/grid" element={<HotelGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/hdetails" element={<SignUpPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
