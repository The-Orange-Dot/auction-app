import React from "react";
import ticket from "../../database/images/Ticket.png";

const TicketBuy = ({ product, setProducts }) => {
  const buyHandler = (item) => {
    fetch(`http://localhost:3000/products/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({ ticketsBought: item.ticketsBought + 1 }),
    })
      .then((r) => r.json())
      .then((updatedItem) => setProducts({ ...product, updatedItem }));
  };

  return (
    <div className="buy-ticket-container">
      <img
        onClick={() => buyHandler(product)}
        src={ticket}
        alt="ticket"
        className="buy-ticket-picture"
      />
    </div>
  );
};

export default TicketBuy;
