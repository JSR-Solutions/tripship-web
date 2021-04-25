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
      {/* <div ref={el => overlay = el} class="overlay">
        <h1 ref={el => overlay_h1 = el}>TRIP</h1>
        <span ref={el => overlay_span = el}>SHRIP</span>
      </div> */}

      <div class="wrapper">
        <div class="nav">
          <div ref={el => logo = el} class="logo">
            <h1>
              <span>CATEGORY</span>
              <br />
              _____________
            </h1> 
          </div>

          <div ref={el => menu_links_ul_li = el} class="menu-links">
            <ul>
              <li ref={el => menu_links_ul_li  = el}>|</li>
              <li ref={el => menu_links_ul_li = el}>Category Name</li>
              <li ref={el => menu_links_ul_li = el}>|</li>
            </ul>
          </div>

          <div ref={el => overlay = el} class="scrolldown">Category Name</div>
        </div>

        <div ref={el => text = el} class="text">
          <div ref={el => title = el} class="title">category</div>
          <p ref={el => text_p = el}>
            thoda sa description <br /> category k baare mein <br />
            thoda zyada bhi chalega XD
          </p>
        </div>

        <div ref={el => watchnow = el} class="watchnow">
          <i class="fa fa-circle"></i>
          <a href="#"></a>
        </div>

        <div ref={el => overlay = el} class="ellipse-container">
          <div class="ellipse thin"></div>
          <div class="ellipse thick"></div>
          <div class="ellipse yellow"></div>
          <div ref={el => circle1= el} class="circle1"></div>
          <div ref={el => circle2 = el} class="circle2"></div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
