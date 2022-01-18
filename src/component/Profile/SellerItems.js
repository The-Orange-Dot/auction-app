import React from "react";
import "./ProfilePage.css";

const SellerItems = ({ product }) => {
  const backgroundImageStyling = {
    backgroundImage: `url(${product.images})`,
    backgroundPosition: "right",
    backgroundColor: "white",
    backgroundSize: "650px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  const numberWithCommas = (num) => {
    return Math.floor(num)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="seller-product-preview">
      <span className="seller-product-title">
        <h3>{product.name}</h3>
      </span>
      <span
        className="seller-product-description"
        style={backgroundImageStyling}
      >
        <div className="overlay" />
        <div className="seller-product-description-text">
          <p>Total price: {numberWithCommas(product.price)}</p>
          <p>
            Tickets Remaining: {product.ticketsRemaining} / {product.tickets}
          </p>
          <p>Created on: {String(product.created_at).slice(0, 10)}</p>
        </div>
      </span>
    </div>
  );
};

export default SellerItems;
