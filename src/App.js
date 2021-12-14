import React from "react";
import "./App.css";
import Product from "./Product";
import NavBar from "./component/Navbar/NavBar";
import Filter from "./component/Filter/FilterBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filter />
      <span className="product-container">
        <Product />
      </span>
    </div>
  );
}

export default App;
