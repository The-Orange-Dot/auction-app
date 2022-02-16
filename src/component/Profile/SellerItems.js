import React, { useEffect, useRef, useState } from "react";
import "./ProfilePage.css";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import gsap from "gsap";

const SellerItems = ({ product, setProducts, products }) => {
  const [delButtonTween, setDelButtonTween] = useState();
  const [clicked, setClicked] = useState(false);
  const el = useRef();

  const backgroundImageStyling = {
    backgroundImage: `url(${product.images})`,
    backgroundPosition: "right",
    backgroundColor: "white",
    backgroundSize: "650px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  useEffect(() => {
    const deleteButton = gsap
      .timeline({ paused: true })
      .fromTo(
        el.current,
        { display: "none", x: 300 },
        { display: "block", x: 0 }
      );
    setDelButtonTween(deleteButton);
  }, []);

  const deleteHandler = () => {
    fetch(`https://boiling-forest-19458.herokuapp.com/products/${product.id}`, {
      method: "DELETE",

      headers: { "Content-Type": "application/json" },
    })
      .then((r) => r.json())
      .then((deletedItem) =>
        setProducts(
          products.filter((item) => {
            return item.id !== deletedItem.id;
          })
        )
      );
  };

  return (
    <div
      className="seller-product-preview"
      onClick={() => {
        clicked ? delButtonTween.reverse(0) : delButtonTween.play(0);
        setClicked(!clicked);
      }}
    >
      <span className="seller-product-title">
        <h3>{product.name}</h3>
      </span>
      <span
        className="seller-product-description"
        style={backgroundImageStyling}
      >
        {product.finished ? (
          <div className="winner-loser-text">
            <h1>Finished!</h1>
          </div>
        ) : (
          <div className="seller-product-description-text">
            <p>Total price: {numberWithCommas(product.price)}</p>
            <p>
              Tickets Remaining: {product.ticketsRemaining} / {product.tickets}
            </p>
            <p>Created on: {String(product.created_at).slice(0, 10)}</p>
          </div>
        )}
      </span>
      <button
        onClick={deleteHandler}
        className="seller-page-delete-product"
        ref={el}
      >
        Delete
      </button>
    </div>
  );
};

export default SellerItems;
