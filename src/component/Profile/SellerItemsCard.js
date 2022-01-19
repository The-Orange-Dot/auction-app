import React from "react";
import SellerItems from "./SellerItems";

const SellerItemsCard = ({ user }) => {
  if (user.products.length > 0) {
    return user.products.map((product) => {
      return (
        <div className="seller-item-card">
          <SellerItems product={product} />
        </div>
      );
    });
  } else return <h1>You currently have no items listed</h1>;
};

export default SellerItemsCard;
