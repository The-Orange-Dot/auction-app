import React from "react";

export const StarRating = (sellerRating) => {
  const userRating = sellerRating;
  let rating = null;

  //Why doesn't switch statement work for thisssss???
  //Oh well, if else will work for now
  if (userRating < 1) {
    rating = <p>&#9734;&#9734;&#9734;&#9734;&#9734;</p>;
  } else if (userRating < 2) {
    rating = <p>&#9733;&#9734;&#9734;&#9734;&#9734;</p>;
  } else if (userRating < 3) {
    rating = <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>;
  } else if (userRating < 4) {
    rating = <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p>;
  } else if (userRating < 5) {
    rating = <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p>;
  } else {
    rating = <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p>;
  }

  return <div className="star-rating">{rating}</div>;
};
