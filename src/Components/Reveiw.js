import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import firebase from "firebase";

import "./Review.css";

const Review = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const [index, setIndex] = useState(0);
  const [review, setReview] = useState({ name: "", image: "", text: "" });
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    updateReview();
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
    updateReview();
  };

  const updateReview = () => {
    setReview({
      name: people[index].name,
      text: people[index].review,
      image: people[index].imageUrl,
    });
  };

  const getReviews = async () => {
    const db = firebase.firestore();
    setPeople([]);
    await db
      .collection("Reviews")
      .get()
      .then((querySnapshot) => {
        if (querySnapshot) {
          querySnapshot.docs.forEach((doc) => {
            setPeople((prev) => {
              return [...prev, doc.data()];
            });
          });

          setReview({
            name: querySnapshot.docs[0].data().name,
            image: querySnapshot.docs[0].data().imageUrl,
            text: querySnapshot.docs[0].data().review,
          });
        }
      });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={review.image} alt={review.name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{review.name}</h4>
      <p className="info">{review.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};

export default Review;
