
import React from "react";
import Landing from "../Components/Landingscreen";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import SmallCarousel from "../Components/smallCarousel"
import SmallCarousel2 from "../Components/samlcarousel2"


const Home = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <Landing />
      <Carousel />
      <SmallCarousel />
      <SmallCarousel2 />
      <Footer />

    </div>
  );
};

export default Home;
