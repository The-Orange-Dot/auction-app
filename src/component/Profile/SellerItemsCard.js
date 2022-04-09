import React, { useContext } from "react";
import SellerItems from "./SellerItems";
import { ProductContext } from "../../App";

const SellerItemsCard = ({
  user,
  setProducts,
  setBuyerInfo,
  setBuyerInfoModal,
  setProductName,
  setWinnerSeller,
  mobile,
}) => {
  const products = useContext(ProductContext);

  const userProducts = products.filter((product) => {
    return product.user_id === user.id;
  });

  if (userProducts.length > 0) {
    return userProducts.map((product) => {
      return (
        <div className="seller-item-card" key={product.id}>
          <SellerItems
            product={product}
            setProducts={setProducts}
            products={products}
            setBuyerInfo={setBuyerInfo}
            setBuyerInfoModal={setBuyerInfoModal}
            setProductName={setProductName}
            setWinnerSeller={setWinnerSeller}
            mobile={mobile}
          />
        </div>
      );
    });
  } else return <h1>You currently have no items listed</h1>;
};

export default SellerItemsCard;
