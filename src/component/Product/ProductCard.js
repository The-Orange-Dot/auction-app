import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";
import { gsap } from "gsap";
import { scrollHandler } from "../BaseComponents/ScrollHandler";

const ProductCard = ({ product, setProducts, products }) => {
  const [isBig, setIsBig] = useState(false);
  const [grayIsOn, setGrayIsOn] = useState(true);

  useEffect(() => {
    scrollHandler(-10000);
    gsap.timeline().to(".card", {
      opacity: 1,
      stagger: 0.2,
      duration: 0.2,
      y: -20,
      ease: "Power2.out",
    });
  }, []);

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
        />
      </span>
    </>
  );
};

export default ProductCard;
