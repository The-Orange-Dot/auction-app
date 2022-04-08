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
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";

export const UserContext = createContext();
export const ProductContext = createContext();
export const LoginContext = createContext();

function App() {
  gsap.config({ nullTargetWarn: false });

  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [mobile, setMobile] = useState(false);
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
    buyer_reviews: [],
    seller_reviews: [],
  });
  const [pageLoaded, setPageLoaded] = useState(false);
  const [category, setCategory] = useState("");

  //Makes the loading logo strobe in and out
  gsap.to(".loading-logo", {
    opacity: 0.5,
    yoyo: true,
    repeat: -1,
    duration: 1,
    y: -10,
    ease: "power.out",
  });

  useEffect(() => {
    isMobile ? setMobile(true) : setMobile(false);
    //Fetches all products and loads them into cards for the browse page
    fetch("https://boiling-forest-19458.herokuapp.com/products")
      .then((res) => res.json())
      .then((products) => {
        setProducts(products);
        setPageLoaded(true);
      });

    //Uses data stored on local storage to keep user logged in
    if (localStorage.getItem("user")) {
      fetch("https://boiling-forest-19458.herokuapp.com/user", {
        headers: {
          user: localStorage.getItem("user"),
        },
      }).then((r) => {
        if (r.ok) {
          r.json().then((userData) => {
            setUser(userData);
            setLoggedIn(true);
          });
        } else {
          setLoggedIn(false);
        }
      });
    }
  }, [isMobile]);

  //Searchbar value is stored in state
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  //Filters the search bar values and categories
  const filterHandler = (category) => {
    setPageLoaded(false);
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
        setCategory(category);
        setPageLoaded(true);
      });
  };

  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={user}>
          <ProductContext.Provider value={products}>
            <LoginContext.Provider value={loggedIn}>
              <NavBar
                pageLoaded={pageLoaded}
                setUser={setUser}
                mobile={mobile}
              />

              <Switch>
                <Route path="/sell">
                  <SellForm
                    setProducts={setProducts}
                    setUser={setUser}
                    mobile={mobile}
                  />
                </Route>

                <Route path="/profile">
                  <ProfilePage
                    mobile={mobile}
                    user={user}
                    setProducts={setProducts}
                    setUser={setUser}
                    setLoggedIn={setLoggedIn}
                  />
                </Route>

                <Route path="/browse">
                  <span className="product-container">
                    <ProductPage>
                      <CategoryNav
                        filterHandler={filterHandler}
                        category={category}
                        mobile={mobile}
                      />
                      {mobile ? null : (
                        <SearchBar searchHandler={searchHandler} />
                      )}
                      {pageLoaded === false ? (
                        <div
                          className={
                            mobile
                              ? "mobile-loading-products"
                              : "loading-products"
                          }
                        >
                          <h1 className="loading-logo">M</h1>
                          <h3>Loading Products...</h3>
                        </div>
                      ) : products.length > 0 ? (
                        <Card
                          search={search}
                          filterHandler={filterHandler}
                          setProducts={setProducts}
                          setUser={setUser}
                          mobile={mobile}
                        />
                      ) : (
                        <h3 className="loading-products">No products found</h3>
                      )}
                    </ProductPage>
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
                  <WelcomePage mobile={mobile} />
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
