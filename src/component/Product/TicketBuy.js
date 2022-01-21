import React from "react";
import ticket from "../../database/images/Ticket.png";
// import { subtractPoints } from "../BaseComponents/SubtractUserPoints";

const TicketBuy = ({ user, product, setTickets, setUser }) => {
  const ticketPrice = product.price / product.tickets;

  const buyTicket = (item, value) => {
    fetch(`http://localhost:3000/users/buy_ticket/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        points: user.points,
        product_id: item.id,
      }),
    }).then(() => {
      //Updates Points
      const finalValue = user.points - value;
      const updatedUser = { ...user, points: finalValue };
      setUser(updatedUser);

      //Updates Tickets remaining
      setTickets((product.ticketsRemaining = product.ticketsRemaining - 1));
    });
  };

  const buyHandler = (product, value) => {
    user.points > ticketPrice
      ? buyTicket(product, value)
      : console.log("Not enough points");
  };

  return (
    <div className="buy-ticket-container">
      {product.ticketsRemaining <= 0 ? null : (
        <img
          onClick={() => buyHandler(product, ticketPrice)}
          src={ticket}
          alt="ticket"
          className="buy-ticket-picture"
        />
      )}
    </div>
  );
};

export default TicketBuy;
