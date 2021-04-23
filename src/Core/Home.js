import React from 'react';
import Landing from '../Components/Landingscreen';
import Carousel from '../Components/Carousel'

const Home = () => {
  return (
    <div style={{width:'100%', overflow:'hidden'}}>
      <Landing />
      <Carousel />
    </div>
  );
};

export default Home;
