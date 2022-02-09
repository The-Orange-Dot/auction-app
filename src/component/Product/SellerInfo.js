import React, { useContext } from "react";
import { UserContext } from "../../App";

const SellerInfo = ({ seller }) => {
  const user = useContext(UserContext);
  // console.log(seller);
  return (
    <div className="seller-info-container">
      {user.id === seller.id ? <h4>You are the seller</h4> : <h4>Seller</h4>}
      <img
        src={seller.picture}
        alt="seller"
        className="seller-profile-picture"
      />
      <p className="seller-username">{seller.username}</p>
      <br />
      <p className="seller-info-rating">Seller Rating:</p>
      <p className="seller-info-rating">{seller.seller_rating}</p>
      {seller.verified ? <p>Verified Seller</p> : null}
    </div>
  );
};

export default SellerInfo;
