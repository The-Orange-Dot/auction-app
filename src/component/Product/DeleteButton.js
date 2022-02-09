import React from "react";

const DeleteButton = ({ isBig, product, setProducts, products }) => {
  const deleteHandler = () => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "DELETE",

      headers: { "Content-Type": "application/json" },
    });
    setProducts(products.filter((item) => item.id !== product.id));
  };

  return <>{isBig ? <button onClick={deleteHandler}>Delete</button> : null}</>;
};

export default DeleteButton;
