import React from "react";
import "./Product.css";

const Item = ({ product, isBig }) => {
  function numberWithCommas(price) {
    const pricePerTicket = price.price / price.tickets;
    return Math.floor(pricePerTicket)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <img className="product-image" src={product.images[0]} alt="" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc-prev">
        {isBig ? product.description : product.descriptionPreview}
      </p>
      <div>
        <strong>Points per ticket:</strong>
      </div>
      <div> {numberWithCommas(product)} Points</div>
      <div>
        <strong>Tickets Remaining:</strong>
      </div>
      <div>
        {product.ticketsRemaining}/{product.tickets}
      </div>
    </>
  );
};

export default Item;
