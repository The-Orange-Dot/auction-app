import { selector } from "gsap/all";
import React, { useState } from "react";

const BuyerSellerSelector = ({ setSellSelected }) => {
  const [selected, setSelected] = useState("bidding");

  return (
    <span className="buyer-seller-selector-container">
      <div
        className={`${selected === "bidding" ? "selected" : ""}`}
        name="bidding"
        onClick={() => {
          setSellSelected(false);
          setSelected("bidding");
        }}
      >
        <span>Bidding</span>
      </div>
      <div
        className={`${selected === "selling" ? "selected" : ""}`}
        name="selling"
        onClick={() => {
          setSellSelected(true);
          setSelected("selling");
        }}
      >
        <span>Selling</span>
      </div>
    </span>
  );
};

export default BuyerSellerSelector;
