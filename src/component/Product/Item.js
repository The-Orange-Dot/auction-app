import React, { useState, useContext, useEffect } from "react";
import "./Product.css";
import TicketBuy from "./TicketBuy";
import DeleteButton from "./DeleteButton";
import { UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import SellerInfo from "./SellerInfo";

const Item = ({ product, isBig, setProducts, products, setUser }) => {
  const user = useContext(UserContext);
  const [grayIsOn, setGrayIsOn] = useState(true);

  const [tickets, setTickets] = useState(product.ticketsRemaining);
  const pricePerTicket = product.price / product.tickets;
  document.body.style.overflow = grayIsOn ? "" : "hidden";

  return (
    <div className="card-content">
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
        {isBig && product.user_id !== user.id ? (
          <TicketBuy
            user={user}
            product={product}
            setProducts={setProducts}
            setTickets={setTickets}
            setUser={setUser}
            grayIsOn={grayIsOn}
            setGrayIsOn={setGrayIsOn}
          />
        ) : (
          <DeleteButton
            isBig={isBig}
            product={product}
            setProducts={setProducts}
            products={products}
            user={user}
          />
        )}
      </div>
    </div>
  );
};

export default Item;
