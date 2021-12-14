import React from "react";
import "./App.css";
import Product from "./Product";
import NavBar from "./component/Navbar/NavBar";
import Filter from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";
import ChargePoints from "./component/Navbar/ChargePoints.js";

function App() {
  return (
    <div className="App">
      <ChargePoints />
      <NavBar />
      <Filter />
      <FilterBackground />
      <span className="product-container">
        <Product />
      </span>
    </div>
  );
}

export default App;
