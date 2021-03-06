import React from "react";
import ticket from "../../database/images/Ticket.png";
import ChargePoints from "../Navbar/ChargePoints";
import "../Navbar/NavBar.css";

const TicketBuy = ({
  mobile,
  user,
  product,
  setTickets,
  setUser,
  grayIsOn,
  setProducts,
  setNotEnoughPoints,
  tickets,
}) => {
  const ticketPrice = product.price / product.tickets;

  //Subtracts points from user and subtracts tickets remaining from product when ticket is clicked
  const buyTicket = (item, value) => {
    fetch(
      `https://boiling-forest-19458.herokuapp.com/users/buy_ticket/${user.id}`,
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          points: user.points,
          product_id: item.id,
          tickets_remaining: tickets,
        }),
      }
    )
      .then((r) => r.json())
      .then((boughtProduct) => {
        console.log(boughtProduct);
        //Updates Points
        console.log(user);
        const finalValue = user.points - value;
        const ticketsBought = user.tickets_bought + 1;
        const updatedUser = {
          ...user,
          points: finalValue,
          tickets_bought: ticketsBought,
        };
        setUser(updatedUser);
        //Updates Tickets remaining
        setTickets((product.ticketsRemaining = product.ticketsRemaining - 1));
        setProducts([...boughtProduct]);
      });
  };

  const notEnoughPoints = () => {
    console.log("Not enough points");
    setNotEnoughPoints(true);
  };

  //Checks if user has enough points to buy a product ticket
  const buyHandler = (product, value) => {
    user.points > ticketPrice ? buyTicket(product, value) : notEnoughPoints();
  };

  return (
    <div className="buy-ticket-container">
      {grayIsOn ? null : <ChargePoints />}
      {product.ticketsRemaining <= 0 ? null : (
        <img
          onClick={() => buyHandler(product, ticketPrice)}
          src={ticket}
          alt="ticket"
          className={
            mobile ? "mobile-buy-ticket-picture" : "buy-ticket-picture"
          }
        />
      )}
    </div>
  );
};

export default TicketBuy;
