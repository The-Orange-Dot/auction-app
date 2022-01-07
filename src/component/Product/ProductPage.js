import React from "react";
import Card from "./ProductCard";

const ProductPage = ({ products, search, filterHandler }) => {
  return (
    <Card products={products} search={search} filterHandler={filterHandler} />
  );
};

export default ProductPage;
