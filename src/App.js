import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import Card from "./component/Product/Card";
import { Switch, Route } from "react-router-dom";
import Sell from "./component/sellComponent/Sell";
import SellForm from "./component/sellComponent/SellForm";
import ProfilePage from "./component/Profile/ProfilePage";
import WelcomePage from "./component/Welcome/WelcomePage";
import FilterBar from "./component/Filter/FilterBar";

function App() {
  const API = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  // const [searchText, setSearchText] = useState(
  //   localStorage.getItem("text") || ""
  // );
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
    <div className="App">
      <NavBar searchHandler={searchHandler} />

      <Switch>
        <Route path="/sell">
          <Sell />
          <SellForm products={products} setProducts={setProducts} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/browse">
          <span className="product-container">
            <Card
              products={products}
              search={search}
              filterHandler={filterHandler}
              setProducts={setProducts}
            />
            <FilterBar filterHandler={filterHandler} />
          </span>
        </Route>

        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
