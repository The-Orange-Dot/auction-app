import React from "react";
import ticket from "../../database/images/Ticket.png";

const TicketBuy = ({ user, product, setTickets, setUser }) => {
  const buyHandler = (item) => {
    //WHY NO WORK!?
    // const pointsPerTicket = item.price / item.tickets;
    // fetch(`http://localhost:3000/users/change_points/${user.id}`, {
    //   method: "PATCH",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ points: user.points - pointsPerTicket }),
    // });

    fetch(`http://localhost:3000/products/take_ticket/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticketsRemaining: item.ticketsRemaining - 1 }),
    })
      .then((r) => r.json)
      .then(() =>
        setTickets((product.ticketsRemaining = product.ticketsRemaining - 1))
      );

    console.log(item.price / item.tickets);
  };

  return (
    <div className="buy-ticket-container">
      {product.ticketsRemaining <= 0 ? null : (
        <img
          onClick={() => buyHandler(product)}
          src={ticket}
          alt="ticket"
          className="buy-ticket-picture"
        />
      )}
    </div>
  );
};

export default TicketBuy;
