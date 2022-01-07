import React from "react";
import "./Product.css";
import TicketBuy from "./TicketBuy";

const Item = ({ product, isBig, setProducts }) => {
  function numberWithCommas(price) {
    const pricePerTicket = price.price / price.tickets;
    return Math.floor(pricePerTicket)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <>
      <img
        style={{ maxWidth: isBig ? "500px" : "300px" }}
        className="product-image"
        src={product.images}
        alt=""
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-desc-prev">
        {isBig ? product.description : product.descriptionPreview}
      </p>
      <div>
        <strong>Points per ticket:</strong>
      </div>
      <div> {numberWithCommas(product)} Points</div>
      {product.tickets === product.ticketsBought ? (
        <p>FINISHED</p>
      ) : (
        <>
          <div>
            <strong>Tickets Bought:</strong>
          </div>
          <div>
            {product.ticketsBought}/{product.tickets}
          </div>{" "}
        </>
      )}
      <div>
        {isBig ? (
          <TicketBuy product={product} setProducts={setProducts} />
        ) : null}
      </div>
    </>
  );
};

export default Item;
