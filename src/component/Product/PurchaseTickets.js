import TicketBuy from "./TicketBuy";

const Purcaseticket = () => {
  const subtractPoints = (user) => {
    fetch(`http://localhost:3000/users/change_points/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ points: user.points - 100 }),
    });
    console.log(user);
  };

  const subtractTicket = (item) => {
    fetch(`http://localhost:3000/products/take_ticket/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ticketsRemaining: item.ticketsRemaining - 1 }),
    });
  };

  return (
    <TicketBuy
      subtractTicket={subtractTicket}
      subtractPoints={subtractPoints}
    />
  );
};

export default Purcaseticket;
