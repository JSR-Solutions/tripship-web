import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import { Link, withRouter } from "react-router-dom";
import Logo from "../Assets/logo.jfif";
import { FiMail, FiPhone } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import firebase from "firebase";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: `var(--mainWhite)` };
  } else {
    return { color: `var(--mainWhite)` };
  }
};

const Header = ({ history }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = firebase.auth();

  useEffect(() => {
    getLoginState();
  }, []);

  const getLoginState = () => {
    auth.onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        setIsLoggedIn(true);
      }
    });
  };

  const changebackgroundd = () => {
    if (window.scrollY > 110) {
      const navlink = document.querySelector(".header-main2");
      const navlinkss = document.querySelector(".hamburger");
      const navlinks = document.querySelector(".header-main3");
      if (navlinks && navlinkss) {
        navlinks.classList.add("header-main3-exit");
        navlinkss.classList.add("hamburger-exit");
        navlink.classList.add("header-main2-exit");
      }
    }
    if (window.scrollY <= 110) {
      const navlinkss = document.querySelector(".hamburger");
      const navlinks = document.querySelector(".header-main3");
      const navlink = document.querySelector(".header-main2");
      if (navlinks && navlinkss) {
        navlink.classList.remove("header-main2-exit");
        navlinks.classList.remove("header-main3-exit");
        navlinkss.classList.remove("hamburger-exit");
      }
    }
  };

  window.addEventListener("scroll", changebackgroundd);

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navlinks = document.querySelector(".header-main34");

    hamburger.addEventListener("click", () => {
      navlinks.classList.toggle("open");
    });

    // const concetp = document.querySelector('.quick-inq')
    // const concetp1 = document.querySelector('.quick-inq2')
    // concetp.addEventListener("click", () => {
    //     concetp1.classList.toggle("open-quick");
    //     concetp.classList.toggle("open-quick1");
    // })
  }, []);

  const changeScreen = () => {
    const navlinks = document.querySelector(".header-main33");
    navlinks.classList.toggle("open");
  };

  return (
    <div className="header-main-main">
      <div className="header-main">
        <div className="header-main1">
          <div className="header-main2">
            <h6>
              For Safe Group Travel Post Covid <span>Click Here</span>
            </h6>
          </div>

          <div className="header-main3">
            <div className="header-main31">
              <div className="hamburger">
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="logo-serach-head1">
                <div className="logo-serach-head">
                  <div className="header-main32">
                    <Link to="/" style={isActive(history, "/")}>
                      {/*<img src={Logo} alt='logo' />*/}
                      <h3>Tripship</h3>
                    </Link>
                  </div>
                  <div className="header-main32-input">
                    <input placeholder="Search Your Trip" />
                    <AiOutlineClose className="header-main-input-cross" />
                  </div>
                </div>
              </div>

              <div className="dub-header-main">
                <div className="header-main33">
                  <ul>
                    <li>
                      <FiPhone />{" "}
                      <a href="tel:+91-7894561230">+91-7894561320</a>
                    </li>
                    <li>
                      <FiPhone />{" "}
                      <a href="tel:+91-7894561230">+91-7894561320</a>
                    </li>
                    <li>
                      <FiMail />{" "}
                      <a href="mailto:jsrsolution.work@gmail.com">
                        tripship.travel@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-main34">
                  <ul>
                    <Link
                      className="deconone"
                      to="/"
                      style={isActive(history, "/")}
                      onClick={changeScreen}
                    >
                      <li>Home</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/packages/Backpacking Trips"
                      style={isActive(history, "/packages/Backpacking Trips")}
                      onClick={changeScreen}
                    >
                      <li>Backpacking Trip</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/packages/Treks"
                      style={isActive(history, "/packages/Treks")}
                      onClick={changeScreen}
                    >
                      <li>Treks</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/packages/Bike Trips"
                      style={isActive(history, "/packages/Bike Trips")}
                      onClick={changeScreen}
                    >
                      <li>Bike Trips</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/custom-package"
                      style={isActive(history, "/custom-package")}
                      onClick={changeScreen}
                    >
                      <li>Custom Package</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/aboutus"
                      style={isActive(history, "/aboutus")}
                      onClick={changeScreen}
                    >
                      <li>About Us</li>
                    </Link>
                    <Link
                      className="deconone"
                      to="/contact-us"
                      style={isActive(history, "/contact-us")}
                      onClick={changeScreen}
                    >
                      <li>Contact Us</li>
                    </Link>
                    {isLoggedIn ? (
                      <Link
                        className="deconone"
                        to="/user"
                        style={isActive(history, "/user")}
                        onClick={changeScreen}
                      >
                        <li>Profile</li>
                      </Link>
                    ) : (
                      <Link
                        className="deconone"
                        to="/signin"
                        style={isActive(history, "/signin")}
                        onClick={changeScreen}
                      >
                        <li>Sign In</li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
