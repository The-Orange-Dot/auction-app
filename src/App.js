import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import Card from "./component/Product/Card";
import { Switch, Route } from "react-router-dom";
import SellForm from "./component/sellComponent/SellForm";
import ProfilePage from "./component/Profile/ProfilePage";
import WelcomePage from "./component/Welcome/WelcomePage";
import FilterBar from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";

export const UserContext = createContext();
export const ProductContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState({
    firstName: "loading",
    lastName: "loading",
    points: 99999,
    picture: "loading",
    email: "loading",
    address: "loading",
    products: [],
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const Product_API = process.env.REACT_APP_API_URL;
    fetch(Product_API)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((userData) => {
        setUser(userData[18]);
        setPageLoaded(true);
      });
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
    //WHY NO WORK!? stores typed search in local host
    // localStorage.setItem("text", searchText);
  };

  const filterHandler = (category) => {
    const API = process.env.REACT_APP_API_URL;
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
      <UserContext.Provider value={user}>
        <ProductContext.Provider value={products}>
          <NavBar searchHandler={searchHandler} pageLoaded={pageLoaded} />

          <Switch>
            <Route path="/sell">
              <SellForm setProducts={setProducts} />
            </Route>

            <Route exact path="/profile">
              <ProfilePage />
            </Route>

            <Route path="/browse">
              <FilterBackground />
              <span className="product-container">
                <Card
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
        </ProductContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
