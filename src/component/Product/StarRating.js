import React from "react";

export const StarRating = (seller) => {
  const userRating = seller.seller_rating;
  let rating = null;

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

  return (
    <div>
      <p>{rating}</p>
    </div>
  );
};
