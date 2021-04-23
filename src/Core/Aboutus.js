import React, { useEffect } from "react";
import "../Core/Aboutus.css";
import Headings from "../Core/Headings";
import { Row, Col, Container } from "react-bootstrap";
import $ from "jquery";
import exp from "../Assets/experience.png";
import staff from "../Assets/employees.png";
import price from "../Assets/dollar.png";
import placeholder from "../Assets/placeholder.png";
import Animation1 from "../Core/Animation1"

const Aboutus = () => {
  useEffect(() => {
    $(document).ready(function () {
      $(this).scrollTop(0);
    });
  }, []);

  return (
    <div className="aboutus-god">
      <div class="main-heading">
        <h1>About Us</h1>
      </div>
      <div className="aboutus-sec1">
        <Headings text="About TripShrip"></Headings>
        <Container>
          <Row>
            <Col>
              <Animation1/>
            </Col>
            <Col>
              Because his mother died when he was very young, Kakashi was raised
              during his early years by his father, Sakumo. Sakumo was famed
              throughout the shinobi world, having saved Konoha on at least one
              occasion; Kakashi in particular revered his father. During one of
              Sakumo's missions - after Kakashi was enrolled in Konoha's Ninja
              Academy - Sakumo made the decision to save the lives of his
              teammates rather than complete the assignment. The mission's
              failure had disastrous consequences for the Land of Fire, causing
              many in Konoha, including the teammates he saved, to vilify him
              for abandoning his duties. Disgraced, Sakumo committed suicide.
              Seeing what his father went through and determined not to make the
              same mistakes, Kakashi decided that following the Shinobi Rules
              must always take priority.
            </Col>
          </Row>
        </Container>
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
        <div className="aboutus-team">
          <Headings text="OUR TEAM"></Headings>
          <Row className="team-cards-aks">
            <Col>
              <div class="container-team">
                <center>
                  <div class="post">
                    <div class="header_post">
                      <img
                        src="https://images.unsplash.com/photo-1476817343404-01ccd61218d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                    </div>

                    <div class="body_post">
                      <div class="post_content">
                        <h1>
                          ABS
                          <br />
                          XYZZZZ{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </Col>

            <Col>
              <div class="container-team">
                <center>
                  <div class="post">
                    <div class="header_post">
                      <img
                        src="https://images.unsplash.com/photo-1476817343404-01ccd61218d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                    </div>

                    <div class="body_post">
                      <div class="post_content">
                        <h1>
                          ABS
                          <br />
                          XYZZZZ{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </Col>

            <Col>
              <div class="container-team">
                <center>
                  <div class="post">
                    <div class="header_post">
                      <img
                        src="https://images.unsplash.com/photo-1476817343404-01ccd61218d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                    </div>

                    <div class="body_post">
                      <div class="post_content">
                        <h1>
                          ABS
                          <br />
                          XYZZZZ{" "}
                        </h1>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
