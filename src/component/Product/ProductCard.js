import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

const ProductCard = ({ product, setProducts }) => {
  const [isBig, setIsBig] = useState(false);
  const [grayIsOn, setGrayIsOn] = useState(true);

  document.body.style.position = isBig ? "fixed" : "";
  const clickHandler = () => {
    if (isBig === false) {
      setIsBig(true);
      setGrayIsOn(false);
    } else {
      setIsBig(false);
      setGrayIsOn(true);
    }
  };
  return (
    <>
      <div
        className={grayIsOn ? "hide-gray" : "show-gray"}
        onClick={() => clickHandler()}
      />
      <span
        className={isBig ? "big-card" : "card"}
        key={product.id}
        //Set onClick to always true, and use a transparent overlay behind it. That will make it false
        //Set a placeholder card when big-card is active so everything doesnt shift around
        onClick={
          isBig
            ? null
            : () => {
                clickHandler();
              }
        }
      >
        <Item
          product={product}
          isBig={isBig}
          setIsBig={setIsBig}
          setProducts={setProducts}
        />
      </span>
    </>
  );
};

export default ProductCard;
