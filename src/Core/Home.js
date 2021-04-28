import React from "react";
import Landing from "../Components/Landingscreen";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Heas from "../Core/Headings";
import "./Home.css";
import Review from "../Components/Reveiw";

const Home = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <Landing />

      <div id="trending">
        <Carousel title="Trending Trips" />
      </div>
      <div className="reviewss">
        <Heas text="Happy Customers" />
        <Review />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
