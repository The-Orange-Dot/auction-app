import React from "react";
import "./ProfilePage.css";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";

const BuyerItems = ({ product }) => {
  const backgroundImageStyling = {
    backgroundImage: `url(${product.images})`,
    backgroundPosition: "right",
    backgroundColor: "white",
    backgroundSize: "650px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  const ticketsHeld = product.buyers
    .split(", ")
    .filter((num) => (num = String(product.user.id))).length;

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
          <p>
            You're holding {ticketsHeld}{" "}
            {ticketsHeld > 1 ? "tickets" : "ticket"}!
          </p>
        </div>
      </span>
    </div>
  );
};

export default BuyerItems;
