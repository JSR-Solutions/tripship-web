import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Styles/Footer.css";
import { IoLogoFacebook, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <Row>
          <Col>
            <h5 className="headin5_amrc col_white_amrc pt2">About Us</h5>

            <p className="mb10">
              TRIPSHRIP is a community of travel enthusiasts who are passionate
              about adventure. We at TRIPSHRIP work towards creating an
              environment for thrill seekers by providing them memorable
              experiences. Our services include road trips, trekking
              expeditions, backpacking trips, corporate trips, and customized
              tour packages and that too at a very reasonable rate. We want to
              make adventure affordable for everyone because we believe in
              'Adventure for all, all for Adventure'. We keep on surprising our
              family members with new experiences because thats what they expect
              us to do. SO what are you waiting for, join us and be a part of
              this evergrowing family.
            </p>
            <p className="mb10">
              <i className="fa fa-location-arrow"></i> address{" "}
            </p>
            <p className="mb10">
              <i className="fa fa-phone"></i> +91-7042640918{" "}
            </p>
            <p className="mb10">
              <i className="fa fa fa-envelope"></i> info.tripshrip@gmail.com{" "}
            </p>
          </Col>

          <Col>
            <h5 className="headin5_amrc col_white_amrc pt2">Trending Trips</h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>

            <h5 className="headin5_amrc col_white_amrc pt2">
              Backpacking Trips
            </h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 className="headin5_amrc col_white_amrc pt2">Bike Trips</h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>

            <h5 className="headin5_amrc col_white_amrc pt2">Treks</h5>

            <ul className="footer_ul_amrc">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </Col>

          <Col>
            <h5 class="headin5_amrc col_white_amrc pt2">Quick Links</h5>

            <ul class="footer_ul2_amrc">
              <li>
                <p>
                  <Link to="/custom-package">Customize your trip</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/aboutus">About Us</Link>
                </p>
              </li>
              <li>
                <p>
                  <Link to="/contact-us">Contact Us</Link>
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </footer>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <footer className="footer2">
        <div className="xyz">
          <ul className="foote_bottom_ul_amrc">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="/custom-package">Custom Trip</Link>
            </li>
          </ul>

          <p class="text-center">
            <div className="black">Trip Shrip</div>
          </p>

          <ul className="social_footer_ul">
            <li>
              <a href="https://www.facebook.com/tripshrip2309/">
                <IoLogoFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.wanderon.in/">
                <IoLogoTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.wanderon.in/">
                <IoLogoWhatsapp />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tripshrip_">
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
