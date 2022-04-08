import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import Fuse from "fuse.js";
import { ProductContext } from "../../App";

const Card = ({ search, setProducts, setUser, mobile }) => {
  const products = useContext(ProductContext);

  //FUSE.JS Library search function
  const option = {
    keys: ["name", "keywords", "category"],
    threshold: 0.2,
    minMatchCharLength: 2,
  };
  const fuseFilter = new Fuse(products, option);
  const searchFilter = search.length > 1 ? fuseFilter.search(search) : products;

  return mobile ? (
    <div className="mobile-card-container">
      {searchFilter.length === 0 ? (
        <div>
          <h3 className="loading-products">No products found</h3>
        </div>
      ) : (
        searchFilter.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product?.item || product}
              setProducts={setProducts}
              products={products}
              setUser={setUser}
              mobile={mobile}
            />
          );
        })
      )}
    </div>
  ) : (
    <div className="card-container">
      {searchFilter.length === 0 ? (
        <div>
          <h3 className="loading-products">No products found</h3>
        </div>
      ) : (
        searchFilter.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product?.item || product}
              setProducts={setProducts}
              products={products}
              setUser={setUser}
            />
          );
        })
      )}
    </div>
  );
};

export default Card;
