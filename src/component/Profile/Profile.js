import React, { useContext } from "react";
import { UserContext } from "../../App";
import { StarRating } from "../Product/StarRating";

const Profile = ({ user_month, mobile }) => {
  const user = useContext(UserContext);
  return (
    <div
      className={
        mobile
          ? "mobile-profile-info-container-tab"
          : "profile-info-container-tab"
      }
    >
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
            <div className="star-rating">{StarRating(user.buyer_rating)}</div>
          </span>
          <span>
            <h2>Seller Rating</h2>
            <div className="star-rating">{StarRating(user.seller_rating)}</div>
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
                <div className="review-cards" key={review.id}>
                  <p>{review.review}</p>
                  {StarRating(review.rating)}
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
