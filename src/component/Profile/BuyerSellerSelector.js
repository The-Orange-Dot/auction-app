import React from "react";

const BuyerSellerSelector = ({ setSellSelected }) => {
  return (
    <span className="buyer-seller-selector-container">
      <div onClick={() => setSellSelected(false)}>
        <span>Bidding</span>
      </div>
      <div onClick={() => setSellSelected(true)}>
        <span>Selling</span>
      </div>
    </span>
  );
};

export default BuyerSellerSelector;
