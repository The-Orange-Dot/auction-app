import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";
import { gsap } from "gsap";
import { scrollHandler } from "../BaseComponents/ScrollHandler";

const ProductCard = ({ product, setProducts, products, setUser }) => {
  const [isBig, setIsBig] = useState(false);
  const [grayIsOn, setGrayIsOn] = useState(true);

  useEffect(() => {
    scrollHandler(-10000);
    gsap.timeline().fromTo(
      ".card",
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        stagger: 0.2,
        duration: 0.1,
        y: -20,
        ease: "back",
        delay: 0.3,
      }
    );
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
          setUser={setUser}
        />
      </span>
    </>
  );
};

export default ProductCard;
