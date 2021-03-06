import React, { useEffect, useState } from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import "./Singlepackage.css";
import Pricecard from "./Pricecard";
import Formcomp from "./Form";
import { GiNetworkBars } from "react-icons/gi";
import { AiOutlineSafetyCertificate, AiOutlineFieldTime } from "react-icons/ai";
import { RiPinDistanceFill, RiCheckboxCircleFill } from "react-icons/ri";
import { IoLocateSharp, IoAlertCircleSharp } from "react-icons/io5";
import { FaTimesCircle } from "react-icons/fa";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import firebase from "firebase";
import { StickyContainer, Sticky } from "react-sticky";
import "react-alice-carousel/lib/alice-carousel.css";
import Imagess from "./imageGallery";
import { FaRupeeSign } from "react-icons/fa";
import Loader from "../../Components/Loader";

const Singlepackage = (props) => {
  const [pack, setpack] = useState("");
  const [mapi, setmap] = useState("");
  const [seatavail, seatavailablity] = useState([]);
  const [isFetching, setFetching] = useState(false);

  // useEffect(() => {
  //   $(document).ready(function () {
  //     $(this).scrollTop(0);
  //   });
  // }, []);

  const db = firebase.firestore();

  useEffect(() => {
    setFetching(true);
    db.collection(props.match.params.category)
      .doc(props.match.params.packageId)
      .get()
      .then((ress) => {
        if (ress.data()) {
          setpack(ress.data());
          if (ress.data().map == "") {
            setmap("https://maps.google.com/maps?q=India&output=embed");
          } else {
            setmap(ress.data().map);
            setFetching(false);
          }
        } else {
          setFetching(false);
          setpack("");
        }
      });
  }, []);

  useEffect(() => {
    var header = document.getElementById("sing-pack-nav");
    if (header) {
      var btns = header.getElementsByClassName("single-pack-nav-item");
      if (btns) {
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("nav-time-active");
            current[0].className = current[0].className.replace(
              " nav-time-active",
              ""
            );
            this.className += " nav-time-active";
          });
        }
      }
    }
  }, []);

  if (isFetching) {
    return <Loader />;
  }

  return (
    <div className="single-package-main">
      <Header />

      <div className="img-carou">
        <div className="single-package-upper">
          <Carousel>
            {pack && (
              <Carousel.Item>
                <img style={{ height: "700px" }} src={pack.imageUrl} alt="sk" />
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </div>

      <div className="single-package-lower">
        {pack && (
          <Container>
            <Row className="sngl-pack-row">
              <Col md={8}>
                <div className="single-package-left">
                  <div className="singel-pack-name">
                    <div className="single-pck-1-row">
                      <div className="single-pack-side-design"></div>
                      <h3>{pack.name}</h3>
                      <hr />
                      <h5>
                        <AiOutlineSafetyCertificate className="single-pck-1-row-icon" />
                        Package Type - {pack.packageType}
                      </h5>
                      <h5>
                        <AiOutlineFieldTime className="single-pck-1-row-icon" />
                        Duration - {pack.duration}
                      </h5>
                      <hr />
                    </div>
                  </div>

                  <StickyContainer>
                    <Sticky topOffset={50}>
                      {({ style, isSticky }) => (
                        <div
                          style={{
                            ...style,
                            marginTop: isSticky ? "66px" : "0px",
                          }}
                          className="single-package-navbar"
                          id="sing-pack-nav"
                        >
                          <div className="single-pack-nav-item">
                            <a href="#overview">
                              <p>Overview</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item nav-time-active">
                            <a href="#detailedItinerary">
                              <p>Detailed_Itinerary</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#map">
                              <p>Map</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#inclusion">
                              <p>Inclusions</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item ">
                            <a href="#exclusion">
                              <p>Exclusions</p>
                            </a>
                          </div>
                          <div className="single-pack-nav-item">
                            <a href="#cancellation">
                              <p>Policies</p>
                            </a>
                          </div>
                        </div>
                      )}
                    </Sticky>

                    {/* OVERVIEW */}
                    <div className="sngl-pack-short-itn" id="overview">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Overview</h4>
                        <hr />
                        {pack &&
                          pack.overviews.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>
                    {/* DETAILED ITINERARY */}
                    <div className="sngl-pack-short-itn" id="detailedItinerary">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Detailed Itinerary</h4>
                        <hr />
                        {pack &&
                          pack.detailedItinerary.map((l, k) => (
                            <div key={k} className="single-pack-itn">
                              <h5>{l.day}</h5>
                              <h6>
                                <IoLocateSharp className="single-pck-2-row-icon" />
                                {l.title}
                              </h6>
                              <p>{l.desc}</p>
                            </div>
                          ))}
                      </div>
                    </div>
                    {/* PACKAGE PRICING */}
                    <div className="sngl-pack-short-itn">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Package Options</h4>
                        <hr />
                        {pack &&
                          pack.pricing.map((l, k) => (
                            <div key={k} className="sng-prc-tag">
                              <Row>
                                <Col lg={6}>
                                  <div className="sng-prc-tag1">
                                    <h5>Option {k + 1}</h5>
                                    <h6>
                                      <AiOutlineFieldTime
                                        style={{ fontSize: "21px" }}
                                      />{" "}
                                      {pack.duration}
                                    </h6>
                                  </div>
                                </Col>
                                <Col lg={6}>
                                  <div className="sng-prc-tag2">
                                    <h6>
                                      <FaRupeeSign /> {parseInt(l.cost) + 1000}
                                    </h6>
                                    <h5>
                                      <span>{l.type}</span> : <FaRupeeSign />{" "}
                                      {l.cost}
                                    </h5>
                                  </div>
                                </Col>
                              </Row>
                            </div>
                          ))}
                      </div>
                    </div>

                    {/* GALLERY */}

                    {/* LOCATION */}
                    <div className="sngl-pack-short-itn" id="map">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Location</h4>
                        <hr />
                        {pack && mapi && (
                          <iframe
                            src={mapi}
                            width="100%"
                            height="450"
                            frameborder="0"
                            allowfullscreen
                          ></iframe>
                        )}
                      </div>
                    </div>
                    {/* INCLUSIONS */}
                    <div className="sngl-pack-short-itn" id="inclusion">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Inclusions</h4>
                        <hr />
                        {pack &&
                          pack.inclusions.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>
                    {/* EXCLUSIONS */}
                    <div className="sngl-pack-short-itn" id="exclusion">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Exclusions</h4>
                        <hr />
                        {pack &&
                          pack.exclusions.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>
                    {/* CANCELLATION??? */}
                    <div className="sngl-pack-short-itn" id="cancellation">
                      <div className="single-pck-2-row">
                        <div className="single-pack-side-design"></div>
                        <h4>Things Needed</h4>
                        <hr />
                        {pack.thingsNeeded &&
                          pack.thingsNeeded.map((l, k) => (
                            <p key={k}>
                              <IoLocateSharp className="single-pck-2-row-icon" />
                              {l}
                            </p>
                          ))}
                      </div>
                    </div>
                  </StickyContainer>
                </div>
              </Col>
              <Col md={4}>
                <div className="single-package-right">
                  <Pricecard price={pack.pricing} />
                  <Formcomp />
                  <div className="skska">
                    <StickyContainer>
                      <Sticky topOffset={50}>
                        {({ style, isSticky }) => (
                          <div
                            style={{
                              ...style,
                              marginTop: isSticky ? "66px" : "0px",
                            }}
                          >
                            <Pricecard price={pack.pricing} />
                          </div>
                        )}
                      </Sticky>
                      <div className="sksks"></div>
                    </StickyContainer>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Singlepackage;

//  {/* HISTORY */}
//                      {/* BRIEF ITINERARY */}
//                      <div className="sngl-pack-short-itn" id="briefItinerary">
//                      <div className="single-pck-2-row">
//                        <div className="single-pack-side-design"></div>
//                        <h4>Brief Itinerary</h4>
//                        <hr />
//                        {pack &&
//                          pack.briefItinerary.map((l, k) => (
//                            <div key={k} className="single-pack-itn">
//                              <h5>{l.day}</h5>
//                              <h6>
//                                <IoLocateSharp className="single-pck-2-row-icon" />
//                                {l.title}
//                              </h6>
//                              <p>{l.desc}</p>
//                            </div>
//                          ))}
//                      </div>
//                    </div>

// <div className="sngl-pack-short-itn">
//                       <div className="single-pck-2-row">
//                         <div className="single-pack-side-design"></div>
//                         <h4>History</h4>
//                         <hr />
//                         {pack &&
//                           pack.histories.map((l, k) => (
//                             <p key={k}>
//                               <IoLocateSharp className="single-pck-2-row-icon" />
//                               {l}
//                             </p>
//                           ))}
//                       </div>
//                     </div>

// <div className="sngl-pack-short-itn" id="gallery">
// <div className="single-pck-2-row">
//   <div className="single-pack-side-design"></div>
//   <h4>Gallery</h4>
//   <hr />

//   {pack && pack.imgUrl && (
//     <Imagess imgUrl={pack.imgUrl} />
//   )}
// </div>
// </div>

// <Row>
//                         {seatavail &&
//                           seatavail.map((l, k) => (
//                             <Col lg={2} md={2} xs={2}>
//                               <div
//                                 style={
//                                   l.seats === "0"
//                                     ? { backgroundColor: "rgba(255, 0, 0, 0.75)" }
//                                     : l.seats > 2
//                                       ? { backgroundColor: "rgba(0, 128, 0,0.75)" }
//                                       : { backgroundColor: "#ff8303" }
//                                 }
//                                 key={k}
//                                 className="sng-date"
//                               >
//                                 <div className="sng-prc-tag1">
//                                   <h5 className="sng-prc-tag-date">{l.sDate && l.sDate}</h5>
//                                 </div>
//                               </div>
//                             </Col>
//                           ))}
//                       </Row>
