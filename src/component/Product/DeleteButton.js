import React from "react";

const DeleteButton = ({ isBig, product, setProducts, products }) => {
  const deleteHandler = () => {
    fetch(`https://boiling-forest-19458.herokuapp.com/products/${product.id}`, {
      method: "DELETE",

      headers: { "Content-Type": "application/json" },
    });
    setProducts(products.filter((item) => item.id !== product.id));
  };

  return <>{isBig ? <button onClick={deleteHandler}>Delete</button> : null}</>;
};

export default DeleteButton;
