import React from "react";
import Landing from "../Components/Landingscreen";
import Carousel from "../Components/Carousel";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Home.css";



const Home = () => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Header />
      <Landing />

      

      <div id="trending">
        <Carousel title="Trending Trips" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
