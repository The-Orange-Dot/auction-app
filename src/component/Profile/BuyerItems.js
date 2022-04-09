import React, { useEffect, useRef, useState, useContext } from "react";
import "./ProfilePage.css";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import { UserContext } from "../../App";
import gsap from "gsap";

const BuyerItems = ({
  product,
  setBuyerInfo,
  setBuyerInfoModal,
  setWinnerSeller,
  setProductName,
  mobile,
}) => {
  const [delButtonTween, setDelButtonTween] = useState();
  const [clicked, setClicked] = useState(false);
  const el = useRef();
  const user = useContext(UserContext);
  const backgroundImageStyling = {
    backgroundImage: `url(${product.images})`,
    backgroundPosition: "right",
    backgroundColor: "white",
    backgroundSize: "650px",
    height: "100%",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
    opacity: "100%",
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

  //Gets Seller info
  const sellerInfoHandler = async (user) => {
    await setBuyerInfo("");
    setBuyerInfoModal(true);
    setBuyerInfo(user);
    setWinnerSeller("seller");
    setProductName(product.name);
  };

  const ticketsHeld = product.buyers
    .split(", ")
    .filter((num) => (num = String(product.user.id))).length;

  return (
    <div
      className="seller-product-preview"
      onClick={() => {
        clicked ? delButtonTween.reverse(0) : delButtonTween.play(0);
        setClicked(!clicked);
      }}
    >
      <span
        className={
          mobile ? "mobile-seller-product-title" : "seller-product-title"
        }
      >
        <h3>{product.name}</h3>
      </span>
      <span
        className={
          mobile
            ? "mobile-seller-product-description"
            : "seller-product-description"
        }
        style={backgroundImageStyling}
      >
        {product.finished ? (
          product.winner === user.id ? (
            <div className={mobile ? "mobile-winner-text" : "winner-text"}>
              <h1>You're a winner!</h1>
              <p>Click here to more info!</p>
            </div>
          ) : (
            <div className={mobile ? "mobile-loser-text" : "loser-text"}>
              <h1>Better luck next time!</h1>
            </div>
          )
        ) : (
          <>
            <div
              className={
                mobile
                  ? "mobile-seller-product-description-text"
                  : "seller-product-description-text"
              }
            >
              <p>
                Points Per Ticket:{" "}
                {numberWithCommas(product.price / product.tickets)}
              </p>
              <p>
                Tickets Remaining: {product.ticketsRemaining} /{" "}
                {product.tickets}
              </p>
              <p>
                You're holding {ticketsHeld}{" "}
                {ticketsHeld > 1 ? "tickets" : "ticket"}!
              </p>
            </div>
          </>
        )}
      </span>
      {product.finished && product.winner === user.id ? (
        <button
          onClick={
            product.finished ? () => sellerInfoHandler(product.user) : null
          }
          className="seller-page-delete-product"
          ref={el}
        >
          Seller Info
        </button>
      ) : null}
    </div>
  );
};

export default BuyerItems;
