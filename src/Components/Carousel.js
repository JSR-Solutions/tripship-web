import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card1";
import "../Styles/carousel.css";
import { Link } from "react-router-dom";
import Heas from "../Core/Headings";
import firebase from "firebase";

import $ from "jquery";
import Spinner from "react-bootstrap/Spinner";
import { Row } from "react-bootstrap";

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
  const [trekkingPackages, setTrekkingPackages] = useState([]);
  const db = firebase.firestore();
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    fetchTrekkingPackages();
  }, []);
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);
  const fetchTrekkingPackages = () => {
    setTrekkingPackages([]);
    db.collection(props.title)
      .get()
      .then((res) => {
        res.forEach((doc) => {
          setIsFetched(true);
          setTrekkingPackages((prev) => {
            return [...prev, { data: doc.data(), _id: doc.id }];
          });
        });
      });
  };

  return (
    <div className="parentcarouel">
      <Heas text={props.title} />
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
        itemClass="carousel-item-padding-40-px"
        className="cari"
      >
        {trekkingPackages.map((pckg) => {
          console.log(pckg);
          return (
            <Link
              className="package-card"
              to={`/packages/Trending Trips/${pckg._id}`}
            >
              <Card
                date="5"

                headi={pckg.name}
                text={pckg.overviews && pckg.overviews[0].substring(0, 80)}

                food="0"
                stay="1"
                sight="1"
                travel="1"
                image={pckg.data.imageUrl}
              />
            </Link>
          );
        })}
      </Carousel>
    </div>
  );
}
export default CardCarousel;
