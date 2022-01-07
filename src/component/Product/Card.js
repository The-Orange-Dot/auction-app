import React from "react";
import ProductCard from "./ProductCard";
import Fuse from "fuse.js";
import FilterBackground from "../Filter/FilterBackground";

const Card = ({ products, search, filterHandler, setProducts }) => {
  //logic here will affect ALL cards at the same time

  //FUSE.JS Library search function
  const option = {
    keys: ["name", "keywords"],
    threshold: 0.4,
    minMatchCharLength: 2,
  };
  const fuseFilter = new Fuse(products, option);
  const searchFilter = search.length > 1 ? fuseFilter.search(search) : products;

  //OLD SEARCH FUNCTION
  // const productFilter = products.filter((product) => {
  //   return (
  //     product.name.toLowerCase().includes(search.toLowerCase()) ||
  //     product.keywords.includes(search.toLowerCase())
  //   );
  // });

  return searchFilter.map((product) => {
    return (
      <>
        <FilterBackground />
        <ProductCard
          key={product?.item?.id || product.id}
          product={product?.item || product}
          setProducts={setProducts}
        />
      </>
    );
  });
};

export default Card;
