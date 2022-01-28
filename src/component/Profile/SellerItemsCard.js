import gsap from "gsap";
import React, { useEffect } from "react";
import SellerItems from "./SellerItems";

const SellerItemsCard = ({ user }) => {
  useEffect(() => {
    gsap.timeline({ paused: true }).from(".seller-item-card", { x: 100 });
  }, []);

  if (user.products.length > 0) {
    return user.products.map((product) => {
      return (
        <div className="seller-item-card" key={product.id}>
          <SellerItems product={product} />
        </div>
      );
    });
  } else return <h1>You currently have no items listed</h1>;
};

export default SellerItemsCard;
