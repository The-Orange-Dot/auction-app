import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { StarRating } from "../Product/StarRating";

const Profile = ({ user_month }) => {
  const user = useContext(UserContext);

  console.log(user);

  return (
    <div className="profile-info-container-tab">
      <h1>Public Profile</h1>
      <div>
        <div>
          <span>
            <h2>Username</h2>
            <p>{user.username}</p>
          </span>
        </div>
        <div>
          <h2>Account Created:</h2>
          <p>{`${user_month} ${String(user.created_at).slice(0, 4)}`}</p>
        </div>
        <div className="user-ratings">
          <span>
            <h2>Buyer Rating</h2>
            <p className="star-rating">{StarRating(user.buyer_rating)}</p>
          </span>
          <span>
            <h2>Seller Rating</h2>
            <p className="star-rating">{StarRating(user.seller_rating)}</p>
          </span>
        </div>
        <div>
          <h2>Total Tickets bought:</h2>
          <p>{user.tickets_bought}</p>
        </div>
        <div className="verified">
          {user.verified ? <h2>Verified Seller</h2> : <h3>Not Verified</h3>}
        </div>
        <div className="review-container">
          <h2>Buyer reviews:</h2>
        </div>
        <div className="reviews">
          {user.buyer_reviews.length === 0 || null ? (
            <p>You currently don't have any reviews</p>
          ) : (
            user.buyer_reviews.map((review) => {
              return (
                <div className="review-cards">
                  <p>{review.review}</p>
                  <p>{StarRating(review.rating)}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
