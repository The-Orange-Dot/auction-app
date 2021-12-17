import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import FilterBar from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";
import Card from "./component/Product/Card";

function App() {
  const API = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const searchHandler = (event) => {
    // console.log(`${event.target.name}: ${event.target.value}`);
    setSearch(event.target.value);
    // console.log(search);
  };

  const filterHandler = (category) => {
    fetch(API)
      .then((res) => res.json())
      .then((products) => {
        const categoryFiltered =
          category === ""
            ? products
            : products.filter((product) => {
                return product.category === category;
              });
        setProducts(categoryFiltered);
      });
  };

  return (
    <div className="App">
      <NavBar searchHandler={searchHandler} />
      <FilterBar filterHandler={filterHandler} />
      <FilterBackground />
      <span className="product-container">
        <Card products={products} search={search} />
      </span>
    </div>
  );
}

export default App;
