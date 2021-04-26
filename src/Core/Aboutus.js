import React, { useRef, useEffect } from "react";
import "../Styles/Aboutus.css";
import "../Styles/Screen.css";
import { TweenMax, Expo } from "gsap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import exp from "../Assets/experience.png";
import staff from "../Assets/employees.png";
import Headings from "./Headings";
import price from "../Assets/dollar.png";
import placeholder from "../Assets/placeholder.png";
import { Row, Col, Container } from "react-bootstrap";
import Card from "../Components/Card3"
import Varish from "../Assets/varish.jpg"
import Shivani from "../Assets/shivani.jpg"
import Priyankar from "../Assets/priyankar.JPG"

const Screen = () => {
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
  let section_one = useRef(null);
  let section_one_content = useRef(null);
  let image_one = useRef(null);
  const tl = useRef();

  // let t1 = gsap.timeline({
  //   scrollTrigger:{
  //     trigger: section_one.current,
  //     start: "center bottom"
  //   }
  // });

  // t1.from(image_one.current, {x:20 , opacity:0, duration : 1.5})
  //  .from(section_one_content.current, {y:300 , opacity:0, duration:1}, "-=1")

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

  return (
    <div>
      <Header />
      <div className="cat-main">
        <div ref={overlay} className="overlay">
          <h1 ref={overlay_h1}>TRIP</h1>
          <span ref={overlay_span}>SHRIP</span>
        </div>

        <div className="wrapper">
          <div className="nav">
            <div ref={logo} className="logo">
              <h1>
                <span>ABOUT US</span>
                <br />
                _____________
              </h1>
            </div>

            <div ref={menu_links_ul_li} className="menu-links">
              <ul>
                <li ref={menu_links_ul_li}>|</li>
                <li ref={menu_links_ul_li}>ABOUT US</li>
                <li ref={menu_links_ul_li}>|</li>
              </ul>
            </div>

            <div ref={scrolldown} className="scrolldown">
              ABOUT US
            </div>
          </div>

          <div ref={text} className="text">
            <div ref={title} className="title">
              about us
            </div>
            <p ref={text_p}>
              “Remember that <br />
              happiness is a way of travel,
              <br /> not a destination.”
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

        <div ref={section_one} className="section-one">
          <div ref={section_one_content} className="sec-one-content">
           <Container> <Row>
              <Col xs={12} md={6} lg={6}>
                <h2>KYA HAAL HAIN?</h2>
                <p>
                  On accompanies his father, Lord Eddard Stark,
                  <br /> his brothers Robb and Bran, his father's ward <br />
                  Theon Greyjoy, and others from Winterfell to
                  <br /> the execution of Gared, a deserter way back
                  <br /> to Winterfell, Jon and Robb race ahead and <br />
                  find a litter of direwolf pups.
                </p>
              </Col>
              <Col xs={12} md={6} lg={6}>
                <div className="ellipse-container-2">
                  <div className="ellipse2 thin2"></div>
                  <div className="ellipse2 thick2"></div>
                  <div className="ellipse2 yellow2"></div>
                </div>
              </Col>
            </Row>
            </Container>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e4c435"
            fill-opacity="1"
            d="M0,288L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
        <div className="aboutus-sec1a">
          <Headings text="WHAT WE PROVIDE"></Headings>
          <div className="maujkaradibete">
            <div className="ekaurdiv">
              <br />
              <div className="services">
                <Container>
                  <Row className="service-row">
                    <Col xs={12} md={6} lg={3}>
                      <center>
                        <img alt="ntohing" src={placeholder} />
                        <h4>LOCATION</h4>
                        <p>
                          Expert local knowledge and regional, on-the-ground
                          guides so you enjoy the ultimate experience.
                        </p>
                      </center>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <center>
                        <img alt="ntohing" src={exp} />
                        <h4>EXPERIENCE</h4>
                        <p>
                          The experience to help enhance your itinerary - or
                          tailor-make you an entire journey.
                        </p>
                      </center>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <center>
                        <img alt="ntohing" src={staff} />
                        <h4>STAFF</h4>
                        <p>
                          All the members of our team are passionate about their
                          work and always ready to help.
                        </p>
                      </center>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                      <center>
                        <img alt="ntohing" src={price} />
                        <h4>PRICE</h4>
                        <p>
                          Due to direct contracts with all our suppliers, our
                          prices are always relevant and affordable.
                        </p>
                      </center>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e4c435"
            fill-opacity="1"
            d="M0,96L1440,160L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      </div>
      <Headings text = "Our Team"/>
      <Row className = "teams-row">
      <Col className = "carditeam">
      <Card 
            headi ="Varish"
            image = {Varish}
            text="Lead Something.."/>
      </Col>
      <Col className = "carditeam">
      <Card 
      headi ="Shivani"
      image = {Shivani}
      text="Head Spmething..."/>
      </Col>
      <Col className = "carditeam">
      <Card 
      headi ="Priyankar"
      image = {Priyankar}
      text="Founder..."/>
      </Col>
      <Col className = "carditeam">
      <Card 
      headi ="Sparsh"
      image = {Priyankar}
      text="Co Lead...."/>
      </Col>
      
      </Row>
  
      <Footer />
    </div>
  );
};

export default Screen;
