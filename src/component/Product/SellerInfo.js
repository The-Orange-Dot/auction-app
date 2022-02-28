import React, { useContext } from "react";
import { UserContext } from "../../App";
import { StarRating } from "./StarRating";

const SellerInfo = ({ seller }) => {
  const user = useContext(UserContext);
  // console.log(seller);
  return (
    <div className="seller-info-container">
      {user.id === seller.id ? (
        <h4>You are the seller</h4>
      ) : (
        <div className="seller-info-profile">
          <div className="seller-info-profile-username">
            <img
              src={seller.picture}
              alt="seller"
              className="seller-profile-picture"
            />
            <p className="seller-username">{seller.username}</p>
          </div>
          <div className="seller-info-profile-rating">
            {seller.verified ? (
              <small className="verified-mark">Verified</small>
            ) : null}

            <p className="seller-info-rating">Seller Rating:</p>
            {StarRating(seller.seller_rating)}
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerInfo;
