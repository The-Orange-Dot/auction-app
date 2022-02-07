import React from "react";

const SellerInfo = ({ seller }) => {
  // console.log(seller);
  return (
    <div className="seller-info-container">
      <p>Seller</p>
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
