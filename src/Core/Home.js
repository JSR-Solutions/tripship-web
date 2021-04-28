import React from "react";
import Landing from "../Components/Landingscreen";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
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
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
