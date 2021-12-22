import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import FilterBar from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";
import Card from "./component/Product/Card";
import { Switch, Route } from "react-router-dom";
import Sell from "./component/sellComponent/Sell";

function App() {
  const API = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
<<<<<<< HEAD
  // const [searchText, setSearchText] = useState(
  //   localStorage.getItem("text") || ""
  // );
=======

console.log(products)

>>>>>>> 151a39b8a92730dff21e0f179cb7a00b069b44a1
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
    //WHY NO WORK!? stores typed search in local host
    // localStorage.setItem("text", searchText);
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
    <Switch>
      <Route exact path="/">
        <div className="App">
          <NavBar searchHandler={searchHandler} />
          <FilterBar filterHandler={filterHandler} />
          <FilterBackground />
          <span className="product-container">
            <Card products={products} search={search} />
          </span>
        </div>
      </Route>
      <Route path="/sell">
        <Sell />
      </Route>
      <Route path="/profile">
        <a href="/">
          <div>PROFILE TEST</div>
        </a>
        {/* <Profile /> */}
      </Route>
    </Switch>
  );
}

export default App;
