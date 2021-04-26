import React, { useEffect, useState, useRef } from "react";
import "../Styles/Screen_cat.css";
import { TweenMax, Expo } from "gsap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import firebase from "firebase";
import { Col, Row } from "react-bootstrap";
import Card from "../Components/Card1";
import { Link } from "react-router-dom";

function CategoryScreen(props) {
  let overlay = useRef(null);
  let overlay_h1 = useRef(null);
  let overlay_span = useRef(null);
  let ellipse_container = useRef(null);
  let yellow = useRef(null);
  let circle1 = useRef(null);
  let circle2 = useRef(null);
  let logo = useRef(null);
  let menu_links_ul_li = useRef(null);
  let scrolldown = useRef(null);
  let title = useRef(null);
  let text = useRef(null);
  let text_p = useRef(null);
  let watchnow = useRef(null);

  const [packages, setPackages] = useState([]);
  const db = firebase.firestore();

  useEffect(() => {
    getPackages();
  }, [props]);

  useEffect(() => {
    TweenMax.to(overlay_h1.current, 2, {
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay_span.current, 2, {
      delay: 0.3,
      opacity: 0,
      y: -60,
      ease: Expo.easeInOut,
    });

    TweenMax.to(overlay.current, 2, {
      delay: 1,
      top: "-100%",
      ease: Expo.easeInOut,
    });

    TweenMax.from(ellipse_container.current, 1, {
      delay: 2,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(yellow.current, 1, {
      delay: 3.5,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(circle1.current, 1, {
      delay: 2.4,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(circle2.current, 1, {
      delay: 2.6,
      opacity: 0,
      ease: Expo.easeInOut,
    });

    TweenMax.from(logo.current, 1, {
      delay: 3,
      opacity: 0,
      y: -100,
      ease: Expo.easeInOut,
    });

    TweenMax.staggerFrom(
      menu_links_ul_li.current,
      1,
      {
        delay: 3.2,
        opacity: 0,
        x: -100,
        ease: Expo.easeInOut,
      },
      0.08
    );

    TweenMax.from(scrolldown.current, 1, {
      delay: 3.4,
      opacity: 0,
      y: 100,
      ease: Expo.easeInOut,
    });

    TweenMax.from(title.current, 1, {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(text.current, 1, {
      delay: 3,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(text_p.current, 1, {
      delay: 3.2,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });

    TweenMax.from(watchnow.current, 1, {
      delay: 3.4,
      opacity: 0,
      x: 200,
      ease: Expo.easeInOut,
    });
  }, []);

  const getPackages = () => {
    setPackages([]);
    db.collection(props.match.params.category)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.docs.forEach((doc) => {
            const data = doc.data();
            setPackages((prev) => {
              return [...prev, data];
            });
          });
        }
      });
  };

  return (
    <div>
      <Header />
      
      <div ref={overlay} className="overlay">
        <h1 ref={overlay_h1}>TRIP</h1>
        <span ref={overlay_span}>SHRIP</span>
      </div>

      <div className="wrapper">
        <div className="nav">
          <div ref={logo} className="logo">
            <h1>
              <span>{props.match.params.category}</span>
              <br />
              _____________
            </h1>
          </div>

          <div ref={menu_links_ul_li} className="menu-links">
            <ul>
              <li ref={menu_links_ul_li}>|</li>
              <li ref={menu_links_ul_li}>{props.match.params.category}</li>
              <li ref={menu_links_ul_li}>|</li>
            </ul>
          </div>

          <div ref={scrolldown} className="scrolldown">
          {props.match.params.category}
          </div>
        </div>

        <div ref={text} className="text3">
          <div ref={title} className="title3">
          {props.match.params.category}
          </div>
          <p ref={text_p}>
          “ Stop worrying <br/> about the potholes in the road <br/> and enjoy the journey.”
          </p>
        </div>

        <div ref={watchnow} className="watchnow">
          <i className="fa fa-circle"></i>
          <a href="#"></a>
        </div>

        <div ref={ellipse_container} className="ellipse-container">
          <div className="ellipse thin"></div>
          <div className="ellipse thick"></div>
          <div className="ellipse yellow"></div>
          <div ref={circle1} className="circle1"></div>
          <div ref={circle2} className="circle2"></div>
        </div>
      </div>
      <Row>
        {packages.map((pckg) => {
          return (
            <Col lg={3} md={4} sm={12}>
              <Link className="package-card"
                to={`/packages/${props.match.params.category}/${pckg.packageId}`}
              >
                <Card
                  date="5"
                  headi={pckg.name}
                  text={`${pckg.overviews[0].substring(0, 80)}...`}
                  food="0"
                  stay="1"
                  sight="1"
                  travel="1"
                  image={pckg.imageUrl}
                />
              </Link>
            </Col>
          );
        })}
      </Row>
      <Footer />
    </div>
  );
}

export default CategoryScreen;
