import React, { useState } from "react";
import "./Product.css";
import TicketBuy from "./TicketBuy";
import DeleteButton from "./DeleteButton";

const Item = ({ user, product, isBig, setProducts, products, setUser }) => {
  const [tickets, setTickets] = useState(product.ticketsRemaining);
  const numberWithCommas = (price) => {
    const pricePerTicket = price.price / price.tickets;
    return Math.floor(pricePerTicket)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
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
      {product.ticketsRemaining <= 0 ? (
        <h3>
          <strong>FINISHED</strong>
        </h3>
      ) : (
        <>
          <div>
            <strong>Tickets Remaining:</strong>
          </div>
          <div>
            {tickets}/{product.tickets}
          </div>{" "}
        </>
      )}
      <div>
        {isBig ? (
          <TicketBuy
            user={user}
            product={product}
            setProducts={setProducts}
            setTickets={setTickets}
            setUser={setUser}
          />
        ) : null}
      </div>
      <div>
        <DeleteButton
          isBig={isBig}
          product={product}
          setProducts={setProducts}
          products={products}
        />
      </div>
    </>
  );
};

export default Item;
