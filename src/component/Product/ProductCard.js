import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

const ProductCard = ({ user, product, setProducts, products, setUser }) => {
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
          products={products}
          user={user}
          setUser={setUser}
        />
      </span>
    </>
  );
};

export default ProductCard;
