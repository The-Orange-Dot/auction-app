import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Fuse from "fuse.js";
import { ProductContext } from "../../App";

const Card = ({ search, setProducts, setUser }) => {
  const products = useContext(ProductContext);

  //FUSE.JS Library search function
  const option = {
    keys: ["name", "keywords"],
    threshold: 0.4,
    minMatchCharLength: 2,
  };
  const fuseFilter = new Fuse(products, option);
  const searchFilter = search.length > 1 ? fuseFilter.search(search) : products;

  return searchFilter.map((product) => {
    return (
      <ProductCard
        key={product.id}
        product={product?.item || product}
        setProducts={setProducts}
        products={products}
        setUser={setUser}
      />
    );
  });
};

export default Card;
