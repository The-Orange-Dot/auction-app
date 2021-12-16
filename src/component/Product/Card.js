import Item from "./Item";
import React from "react";

const Card = ({ products }) => {
  //All the product logic can go into here!!!

  return products.map((product) => {
    return (
      <span className="card" key={product.id} onClick={(e) => console.log(e)}>
        <Item product={product} />
      </span>
    );
  });
};

export default Card;
