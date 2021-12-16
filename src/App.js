import React, { useState } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import FilterBar from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";
import ChargePoints from "./component/Navbar/ChargePoints.js";
import Card from "./component/Product/Card";
import { products } from "./db";

function App() {
  const [productsState, setProductsState] = useState(products);

  const filterHandler = (category, totalTickets) => {
    const categoryFiltered =
      category === ""
        ? products
        : products.filter((product) => {
            return product.category === category;
          });

    setProductsState(categoryFiltered);
  };

  return (
    <div className="App">
      <ChargePoints />
      <NavBar />
      <FilterBar filterHandler={filterHandler} />
      <FilterBackground />
      <span className="product-container">
        <Card products={productsState} />
      </span>
    </div>
  );
}

export default App;
