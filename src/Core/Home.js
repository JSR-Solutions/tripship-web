import React from "react";
import Landing from "../Components/Landingscreen";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Review from "../Components/Reveiw"

const Home = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <Landing />
      <Carousel />
      <Review/>
      <Footer />
    </div>
  );
};

export default Home;
