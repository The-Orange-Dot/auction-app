import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

const ProductCard = ({ product }) => {
  const [isBig, setIsBig] = useState(false);

  return (
    <span
      className={isBig ? "big-card" : "card"}
      key={product.id}
      //Set onClick to always true, and use a transparent overlay behind it. That will make it false
      //Set a placeholder card when big-card is active so everything doesnt shift around
      onClick={() => setIsBig(!isBig)}
    >
      <Item product={product} isBig={isBig} />
    </span>
  );
};

export default ProductCard;
