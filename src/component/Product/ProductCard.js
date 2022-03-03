import React, { useEffect, useState } from "react";
import Item from "./Item";
import { gsap } from "gsap";
import { scrollHandler } from "../BaseComponents/ScrollHandler";
import shocked from "../../database/images/shocked.png";

const ProductCard = ({ product, setProducts, products, setUser }) => {
  const [isBig, setIsBig] = useState(false);
  const [grayIsOn, setGrayIsOn] = useState(true);
  const [notEnoughPoints, setNotEnoughPoints] = useState(false);

  document.documentElement.style.overflowY = grayIsOn ? "" : "hidden";

  //Scrolls to the top of the page when browse page is loaded for the first time
  useEffect(() => {
    scrollHandler(-10000);
    gsap.timeline().fromTo(
      ".card",
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.1,
        y: -20,
        ease: "back",
        delay: 0.3,
      }
    );
  }, []);

  //Prevents scrolling when a large card is open
  document.body.style.position = isBig ? "fixed" : "";

  //Turns the big product page on or off when clicked
  const clickHandler = () => {
    if (isBig === false) {
      setIsBig(true);
      setGrayIsOn(false);
    } else {
      setIsBig(false);
      setGrayIsOn(true);
      setNotEnoughPoints(false);
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
        <span className="product-image-container">
          <Item
            product={product}
            isBig={isBig}
            setIsBig={setIsBig}
            setProducts={setProducts}
            products={products}
            setUser={setUser}
            notEnoughPoints={notEnoughPoints}
            setNotEnoughPoints={setNotEnoughPoints}
          />
        </span>
      </span>
      {notEnoughPoints ? (
        <img
          src={shocked}
          alt="not enough points"
          className="not-enough-points-img"
        />
      ) : null}
    </>
  );
};

export default ProductCard;
