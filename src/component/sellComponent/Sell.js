import React from "react";

const Sell = () => {
  const sellSubmitHandler = (sell) => {
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sell),
    })
      .then((r) => r.json())
      .then((newItem) => console.log(newItem));
  };

  return (
    <span className="sell-container">
      <p className="sell">START SELLING</p>
    </span>
  );
};

export default Sell;
