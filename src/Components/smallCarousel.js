import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card2";
import "../Styles/carousel.css";
import { Link } from "react-router-dom";
import Heas from "../Core/Headings"


import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1200, min: 700 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 965, min: 643 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  smalie: {
    breakpoint: { max: 643, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
function CardCarousel(props) {
  // const [trekkingPackages, setTrekkingPackages] = useState([]);
  // const db = firebase.firestore();
  // const [isFetched, setIsFetched] = useState(false);

  // useEffect(() => {
  //   fetchTrekkingPackages();
  // }, []);
  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(this).scrollTop(0);
  //   });
  // }, []);
  // const fetchTrekkingPackages = () => {
  //   setTrekkingPackages([]);
  //   db.collection(props.packageType)
  //     .get()
  //     .then((res) => {
  //       res.forEach((doc) => {
  //         setIsFetched(true);
  //         setTrekkingPackages((prev) => {
  //           return [...prev, { data: doc.data(), _id: doc.id }];
  //         });
  //       });
  //     });
  // };

  return (
    <div className="parentcarouel">
      <Heas text= "Backpacking Trips" />
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition=""
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
        className="cari"
      >
        
              <div>
                <Card 
                image = "https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/m7_orig.jpeg" 
                headi = "Card 1" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "/>
                </div>
              
              <div>
                <Card 
                image = "https://media-cdn.tripadvisor.com/media/photo-s/1c/7e/7c/b6/renest-river-country.jpg" 
                headi = "Card 2" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
                />
              </div>
              
              <div>
                <Card 
                image = "https://www.honeymoonpackagesmanali.org/uploads/8/2/6/1/8261259/m7_orig.jpeg" 
                headi = "Card 3" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "/>
                
                
              </div>
              
              <div>
                <Card 
                image = "https://media-cdn.tripadvisor.com/media/photo-s/1c/7e/7c/b6/renest-river-country.jpg" 
                headi = "Card 4" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "/>
                
              </div>
              <div>
                <Card 
                image = "https://media-cdn.tripadvisor.com/media/photo-s/1c/7e/7c/b6/renest-river-country.jpg" 
                headi = "Card 2" 
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore "
                />
              </div>
      </Carousel>
    </div>
  );
}
export default CardCarousel;
