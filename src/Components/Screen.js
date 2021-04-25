import React, { useRef, useEffect } from "react";
import "../Styles/Screen.css";
import { gsap } from "gsap";
import { TweenMax, Expo } from "gsap";

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
    <div className="cat-main">
      <div ref={overlay} className="overlay">
        <h1 ref={overlay_h1}>TRIP</h1>
        <span ref={overlay_span}>SHRIP</span>
      </div>

      <div className="wrapper">
        <div className="nav">
          <div ref={logo} className="logo">
            <h1>
              <span>CATEGORY</span>
              <br />
              _____________
            </h1> 
          </div>

          <div ref={menu_links_ul_li} className="menu-links">
            <ul>
              <li ref={menu_links_ul_li}>|</li>
              <li ref={menu_links_ul_li}>Category Name</li>
              <li ref={menu_links_ul_li}>|</li>
            </ul>
          </div>

          <div ref={scrolldown} className="scrolldown">Category Name</div>
        </div>

        <div ref={text} className="text">
          <div ref={title} className="title">category</div>
          <p ref={text_p}>
            thoda sa description <br /> category k baare mein <br />
            thoda zyada bhi chalega XD
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
    </div>
  );
};

export default Screen;
