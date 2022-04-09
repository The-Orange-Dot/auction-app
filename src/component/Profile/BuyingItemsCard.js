import React, { useEffect, useContext, useState } from "react";
import { ProductContext } from "../../App";
import BuyerItems from "./BuyerItems";

const BuyingItemsCard = ({
  user,
  setBuyerInfo,
  setBuyerInfoModal,
  setProductName,
  setWinnerSeller,
  mobile,
}) => {
  const products = useContext(ProductContext);
  const [boughtItems, setBoughtItems] = useState([]);

  useEffect(() => {
    if (products.length !== 0) {
      let filteredItems = products.filter(
        (product) =>
          product.buyers !== null && product.buyers.includes(`${user.id}`)
      );
      setBoughtItems(filteredItems);
    }
  }, [user, products]);

  if (boughtItems.length > 0) {
    return boughtItems.map((product) => {
      return (
        <div className="seller-item-card" key={product.id}>
          <BuyerItems
            product={product}
            setBuyerInfo={setBuyerInfo}
            setBuyerInfoModal={setBuyerInfoModal}
            setWinnerSeller={setWinnerSeller}
            setProductName={setProductName}
            mobile={mobile}
          />
        </div>
      );
    });
  } else {
    return <h1>You currently don't hold any tickets!</h1>;
  }
};

export default BuyingItemsCard;
