import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import NavBar from "./component/Navbar/NavBar";
import Card from "./component/Product/Card";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SellForm from "./component/sellComponent/SellForm";
import ProfilePage from "./component/Profile/ProfilePage";
import WelcomePage from "./component/Welcome/WelcomePage";
import ProductPage from "./component/Product/ProductPage";
import CategoryNav from "./component/Navbar/CategoryNav";
import SearchBar from "./component/Navbar/SearchBar";
import Login from "./component/Login/Login";
import RegisterNewUser from "./component/Login/RegisterNewUser";

export const UserContext = createContext();
export const ProductContext = createContext();
export const LoginContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    points: 0,
    picture:
      "https://www.peachridgeglass.com/wp-content/uploads/2013/07/MoxieAd1.jpg",
    email: "",
    address: "",
    products: [],
  });
  const [pageLoaded, setPageLoaded] = useState(false);

  console.log(user);

  useEffect(() => {
    const Product_API = process.env.REACT_APP_API_URL;
    fetch(Product_API)
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
      });
    fetch("http://localhost:3000/user", {
      headers: {
        user_id: localStorage.getItem("user_id"),
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((userData) => {
          setUser(userData);
          setPageLoaded(true);
          setLoggedIn(true);
        });
      } else {
        setLoggedIn(false);
      }
    });
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
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
    <Router>
      <div className="App">
        <UserContext.Provider value={user}>
          <ProductContext.Provider value={products}>
            <LoginContext.Provider value={loggedIn}>
              <NavBar pageLoaded={pageLoaded} setUser={setUser} />

              <Switch>
                <Route path="/sell">
                  <SellForm setProducts={setProducts} setUser={setUser} />
                </Route>

                <Route path="/profile">
                  <ProfilePage
                    user={user}
                    setProducts={setProducts}
                    setUser={setUser}
                    setLoggedIn={setLoggedIn}
                  />
                </Route>

                <Route path="/browse">
                  <span className="product-container">
                    <ProductPage>
                      <CategoryNav filterHandler={filterHandler} />
                      <SearchBar searchHandler={searchHandler} />
                      <Card
                        search={search}
                        filterHandler={filterHandler}
                        setProducts={setProducts}
                        setUser={setUser}
                      />
                    </ProductPage>
                    {/* <FilterBackground />
                  <FilterBar filterHandler={filterHandler} /> */}
                  </span>
                </Route>

                <Route path="/login">
                  <Login
                    setUser={setUser}
                    setLoggedIn={setLoggedIn}
                    setPageLoaded={setPageLoaded}
                  />
                </Route>

                <Route path="/register">
                  <RegisterNewUser />
                </Route>

                <Route exact path="/">
                  <WelcomePage />
                </Route>
              </Switch>
            </LoginContext.Provider>
          </ProductContext.Provider>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
