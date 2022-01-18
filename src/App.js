import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import Card from "./component/Product/Card";
import { Switch, Route } from "react-router-dom";
import SellForm from "./component/sellComponent/SellForm";
import ProfilePage from "./component/Profile/ProfilePage";
import WelcomePage from "./component/Welcome/WelcomePage";
import FilterBar from "./component/Filter/FilterBar";
import FilterBackground from "./component/Filter/FilterBackground";

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
    products: ["loading"],
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const API = process.env.REACT_APP_API_URL;
    fetch(API)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);

        fetch("http://localhost:3000/users")
          .then((r) => r.json())
          .then((userData) => {
            setUser(userData[18]);
            setPageLoaded(true);
          });
      });
  }, []);

  console.log(user);
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
      <NavBar
        searchHandler={searchHandler}
        user={user}
        pageLoaded={pageLoaded}
      />

      <Switch>
        <Route path="/sell">
          <SellForm products={products} setProducts={setProducts} />
        </Route>

        <Route exact path="/profile">
          <ProfilePage user={user} />
        </Route>

        <Route path="/browse">
          <FilterBackground />
          <span className="product-container">
            <Card
              products={products}
              search={search}
              filterHandler={filterHandler}
              setProducts={setProducts}
              user={user}
              setUser={setUser}
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
