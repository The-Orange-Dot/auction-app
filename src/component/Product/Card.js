import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Fuse from "fuse.js";
import { ProductContext } from "../../App";

const Card = ({ search, setProducts }) => {
  const products = useContext(ProductContext);

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
        <ProductCard
          key={product?.item?.id || product.id}
          product={product?.item || product}
          setProducts={setProducts}
          products={products}
        />
      </>
    );
  });
};

export default Card;
