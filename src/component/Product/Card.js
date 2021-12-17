import React from "react";
import ProductCard from "./ProductCard";

const Card = ({ products, search }) => {
  //logic here will affect ALL cards at the same time

  const productFilter = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  return productFilter.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
};

export default Card;
