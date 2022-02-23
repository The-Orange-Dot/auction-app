import React, { useState, useContext } from "react";
import "./Product.css";
import TicketBuy from "./TicketBuy";
import { LoginContext, UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import SellerInfo from "./SellerInfo";

const Item = ({ product, isBig, setProducts, setUser, setNotEnoughPoints }) => {
  const loggedIn = useContext(LoginContext);
  const user = useContext(UserContext);
  const [grayIsOn, setGrayIsOn] = useState(true);
  const [tickets, setTickets] = useState(product.ticketsRemaining);

  //Prevents scrolling when gray overlay is up
  const pricePerTicket = product.price / product.tickets;
  document.body.style.overflow = grayIsOn ? "" : "hidden";

  return (
    <div className="card-content">
      <span>
        <img
          style={{ maxWidth: isBig ? "500px" : "300px" }}
          className="product-image"
          src={product.images}
          alt=""
        />
      </span>
      <h3 className="product-name">{product.name}</h3>
      {isBig ? (
        <p className="product-desc">{product.description}</p>
      ) : (
        <p className="product-desc-prev">{product.descriptionPreview}</p>
      )}
      <div>
        <strong>Points per ticket:</strong>
      </div>
      <div> {numberWithCommas(pricePerTicket)} Points</div>
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
          </div>
        </>
      )}
      {isBig ? <SellerInfo seller={product.user} isBig={isBig} /> : null}
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
