import React, { useState, useContext } from "react";
import "./Product.css";
import TicketBuy from "./TicketBuy";
import { LoginContext, UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import SellerInfo from "./SellerInfo";
import moment from "moment";

const Item = ({ product, isBig, setProducts, setUser, setNotEnoughPoints }) => {
  const loggedIn = useContext(LoginContext);
  const user = useContext(UserContext);
  const [grayIsOn, setGrayIsOn] = useState(true);
  const [tickets, setTickets] = useState(product.ticketsRemaining);

  //Prevents scrolling when gray overlay is up
  const pricePerTicket = product.price / product.tickets;
  document.body.style.overflow = grayIsOn ? "" : "hidden";

  //Moment.js - checks if the product is new (created at least 3 days ago)
  const days = moment().diff(product.created_at, "days");
  const newProduct = days < 3;

  return (
    <div className="card-content">
      <span>
        {!isBig && newProduct ? <p className="new-banner">NEW</p> : null}
        <img
          style={{ maxWidth: isBig ? "500px" : "300px" }}
          className={isBig ? "big-product-image" : "product-image"}
          src={product.images}
          alt=""
        />
      </span>
      <h3 className="product-name">{product.name}</h3>
      {!isBig && product.user.id === user.id ? (
        <small className="user-listing">Your listing</small>
      ) : !isBig && product.user.verified ? (
        <small className="verified-mark">Verified Seller</small>
      ) : null}
      {isBig ? <p className="product-desc">{product.description}</p> : null}
      <div className="ticket-info">
        {product.finished && !isBig ? null : (
          <div style={{ textAlign: "center" }}>
            <div>
              <strong>Points per ticket:</strong>
            </div>
            <div> {numberWithCommas(pricePerTicket)} Points</div>
          </div>
        )}
        {product.ticketsRemaining <= 0 ? (
          <h3 className={`${isBig ? "" : "finished"}`}>
            <strong>FINISHED</strong>
          </h3>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div>
              <strong>Tickets Remaining:</strong>
            </div>
            <div>
              {tickets}/{product.tickets}
            </div>
          </div>
        )}
        {isBig ? <SellerInfo seller={product.user} isBig={isBig} /> : null}
      </div>
      <div>
        {isBig && product.user_id !== user.id && loggedIn === true ? (
          <TicketBuy
            user={user}
            product={product}
            setProducts={setProducts}
            setTickets={setTickets}
            setUser={setUser}
            grayIsOn={grayIsOn}
            setNotEnoughPoints={setNotEnoughPoints}
            setGrayIsOn={setGrayIsOn}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Item;
