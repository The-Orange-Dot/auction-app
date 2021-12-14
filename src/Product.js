import React, { useState } from "react";
import { products } from "./db";
import "./Product.css";

const Product = () => {
  const [isLarge, setIsLarge] = useState("card");
  // const [noDisplay, setNoDisplay] = useState("");

  const eventHandler = (e) => {
    console.log(e);
    setIsLarge(isLarge === "card" ? "big-card" : "card");
  };

  function numberWithCommas(price) {
    return price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderProducts = (items) => {
    return items.map((item) => {
      return (
        <span
          className={isLarge}
          key={item.id}
          onClick={() => eventHandler(item.id)}
        >
          <img className="product-image" src={item.images[0]} alt="" />
          <h3 className="product-name">{item.name}</h3>
          {/* Only up to 20 characters to preview your description */}
          <p className="product-desc-prev">{item.descriptionPreview}</p>
          <div className="price-ticket-container">
            <span className="target-price">
              <div>Target:</div>
              <div> ¥{numberWithCommas(item)}</div>
            </span>
            <span className="tickets">
              <div>Tickets Remaining:</div>
              <div>
                {item.ticketsRemaining}/{item.tickets}
              </div>
            </span>
          </div>
        </span>
      );
    });
  };

  return renderProducts(products);
};

export default Product;
