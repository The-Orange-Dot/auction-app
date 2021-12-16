import React from "react";
import "./Product.css";

const Item = ({ product }) => {
  function numberWithCommas(price) {
    return price.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div>
      <img className="product-image" src={product.images[0]} alt="" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc-prev">{product.descriptionPreview}</p>
      <div>Target:</div>
      <div> ¥{numberWithCommas(product)}</div>
      <div>Tickets Remaining:</div>
      <div>
        {product.ticketsRemaining}/{product.tickets}
      </div>
    </div>
  );
};

export default Item;
