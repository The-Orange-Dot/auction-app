import React from "react";
import { products } from "./db";
import "./Product.css";

const Product = (item) => {
  function numberWithCommas(x) {
    return x.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const renderProducts = (items) => {
    return items.map((item) => {
      return (
        <span className="card" key={item.id}>
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
              {/* FIX THIS!!! */}
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
