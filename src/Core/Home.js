import React from 'react';
import Landing from '../Components/Landingscreen';
import Carousel from '../Components/Carousel'
import SmallCarousel from "../Components/smallCarousel"
import SmallCarousel2 from "../Components/samlcarousel2"


const Home = () => {
  return (
    <div style={{width:'100%', overflow:'hidden'}}>
      <Landing />
      <Carousel />
      <SmallCarousel />
      <SmallCarousel2 />
    </div>
  );
};

export default Home;
