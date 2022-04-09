import React, { useContext, useState } from "react";
import "./ProfilePage.css";
import ProfileCard from "./ProfileCard";
import {
  useRouteMatch,
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Profile from "./Profile";
import Account from "./Account";
import SellerItemsCard from "./SellerItemsCard";
import BuyingItemsCard from "./BuyingItemsCard";
import BuyerSellerSelector from "./BuyerSellerSelector";
import { UserContext } from "../../App";
import { StarRating } from "../Product/StarRating";

const ProfilePage = ({ setProducts, setUser, setLoggedIn, mobile }) => {
  const user = useContext(UserContext);
  const [sellSelected, setSellSelected] = useState(false);
  const { path, url } = useRouteMatch();
  const [buyerInfoModal, setBuyerInfoModal] = useState(false);
  const [buyerInfo, setBuyerInfo] = useState({
    username: "",
    picture: "",
    firstName: "",
    lastName: "",
    address: "",
    seller_rating: 0,
  });
  const [productName, setProductName] = useState("");
  const [winnerSeller, setWinnerSeller] = useState("");

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const user_month = month[parseInt(String(user.created_at).slice(5, 7)) - 1];

  const linkStyling = {
    color: "black",
    textDecoration: "none",
    width: "100%",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.2rem",
  };

  const activeLink = {
    color: "white",
    backgroundColor: "black",
    width: "100%",
    textAlign: "center",
  };

  return mobile ? (
    <Router>
      <div className="profile-page-container">
        <div className="mobile-profile-info-container">
          <span>
            <div className="mobile-profile-nav-bar-category-selector-container">
              <NavLink
                exact
                to={`${url}/info`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Profile</span>
              </NavLink>
              <NavLink
                to={`${url}/account`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Account</span>
              </NavLink>
              <NavLink
                exact
                to={`${url}/tickets`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Tickets</span>
              </NavLink>
            </div>
            <div>
              <ProfileCard setLoggedIn={setLoggedIn} mobile={mobile}>
                <Switch>
                  <Route path={`${path}/tickets`}>
                    <span className="mobile-bid-items-container">
                      <div>
                        <BuyerSellerSelector
                          setSellSelected={setSellSelected}
                          mobile={mobile}
                        />

                        <h1>Your {sellSelected ? "Sell" : "Buy"} List</h1>
                        {sellSelected ? (
                          <SellerItemsCard
                            mobile={mobile}
                            user={user}
                            setProducts={setProducts}
                            setUser={setUser}
                            setBuyerInfo={setBuyerInfo}
                            setBuyerInfoModal={setBuyerInfoModal}
                            buyerInfoModal={buyerInfoModal}
                            setProductName={setProductName}
                            setWinnerSeller={setWinnerSeller}
                          />
                        ) : (
                          <BuyingItemsCard
                            mobile={mobile}
                            user={user}
                            setBuyerInfo={setBuyerInfo}
                            setBuyerInfoModal={setBuyerInfoModal}
                            setWinnerSeller={setWinnerSeller}
                            setProductName={setProductName}
                          />
                        )}
                      </div>
                    </span>
                  </Route>
                  <Route path={`${path}/account`}>
                    <Account
                      user_month={user_month}
                      setUser={setUser}
                      mobile={mobile}
                    />
                  </Route>
                  <Route path={`${path}/info`}>
                    <Profile user_month={user_month} mobile={mobile} />
                  </Route>
                </Switch>
              </ProfileCard>
            </div>
          </span>
        </div>
        {buyerInfoModal ? (
          <div className="winner-modal">
            <h2>
              {winnerSeller === "winner" ? "Winner" : "Seller"} info for:{" "}
            </h2>
            <p>
              <strong>{productName}</strong>
            </p>
            <img
              alt="user profile"
              src={buyerInfo.picture}
              className="winner-profile-picture"
            />
            <p>
              <strong>{buyerInfo.username}</strong>
            </p>
            {winnerSeller === "winner" ? (
              <>
                <p>
                  {buyerInfo.firstName} {buyerInfo.lastName}
                </p>
                <div>
                  <p>
                    <strong>Address: </strong>
                  </p>
                  <p>{buyerInfo.address}</p>
                </div>
              </>
            ) : (
              <div>
                <p>
                  <strong>Seller Rating: </strong>
                </p>
                {StarRating(buyerInfo.seller_rating)}
              </div>
            )}

            <button
              className="contact-winner-button"
              onClick={() => console.log("Not Implemented Yet")}
            >
              Contact {winnerSeller === "winner" ? "Winner" : "Seller"}
            </button>
            <button
              className="log-out-button"
              onClick={() => setBuyerInfoModal(false)}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </Router>
  ) : (
    <Router>
      <div className="profile-page-container">
        <div className="profile-info-container">
          <span>
            <div className="profile-nav-bar-category-selector-container">
              <NavLink
                exact
                to={`${url}/info`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Profile</span>
              </NavLink>
              <NavLink
                to={`${url}/account`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Account</span>
              </NavLink>
              <NavLink
                exact
                to={`${url}/tickets`}
                style={linkStyling}
                activeStyle={activeLink}
              >
                <span className="profile-link-text">Tickets</span>
              </NavLink>
            </div>
            <div>
              <ProfileCard setLoggedIn={setLoggedIn} mobile={mobile}>
                <Switch>
                  <Route path={`${path}/tickets`}>
                    <span className="bid-items-container">
                      <div>
                        <BuyerSellerSelector
                          mobile={mobile}
                          setSellSelected={setSellSelected}
                        />

                        <h1>Your {sellSelected ? "Sell" : "Buy"} List</h1>
                        {sellSelected ? (
                          <SellerItemsCard
                            mobile={mobile}
                            user={user}
                            setProducts={setProducts}
                            setUser={setUser}
                            setBuyerInfo={setBuyerInfo}
                            setBuyerInfoModal={setBuyerInfoModal}
                            buyerInfoModal={buyerInfoModal}
                            setProductName={setProductName}
                            setWinnerSeller={setWinnerSeller}
                          />
                        ) : (
                          <BuyingItemsCard
                            mobile={mobile}
                            user={user}
                            setBuyerInfo={setBuyerInfo}
                            setBuyerInfoModal={setBuyerInfoModal}
                            setWinnerSeller={setWinnerSeller}
                            setProductName={setProductName}
                          />
                        )}
                      </div>
                    </span>
                  </Route>
                  <Route path={`${path}/account`}>
                    <Account
                      mobile={mobile}
                      user_month={user_month}
                      setUser={setUser}
                    />
                  </Route>
                  <Route path={`${path}/info`}>
                    <Profile mobile={mobile} user_month={user_month} />
                  </Route>
                </Switch>
              </ProfileCard>
            </div>
          </span>
        </div>
        {buyerInfoModal ? (
          <div className="winner-modal">
            <h2>
              {winnerSeller === "winner" ? "Winner" : "Seller"} info for:{" "}
            </h2>
            <p>
              <strong>{productName}</strong>
            </p>
            <img
              alt="user profile"
              src={buyerInfo.picture}
              className="winner-profile-picture"
            />
            <p>
              <strong>{buyerInfo.username}</strong>
            </p>
            {winnerSeller === "winner" ? (
              <>
                <p>
                  {buyerInfo.firstName} {buyerInfo.lastName}
                </p>
                <div>
                  <p>
                    <strong>Address: </strong>
                  </p>
                  <p>{buyerInfo.address}</p>
                </div>
              </>
            ) : (
              <div>
                <p>
                  <strong>Seller Rating: </strong>
                </p>
                {StarRating(buyerInfo.seller_rating)}
              </div>
            )}

            <button
              className="contact-winner-button"
              onClick={() => console.log("Not Implemented Yet")}
            >
              Contact {winnerSeller === "winner" ? "Winner" : "Seller"}
            </button>
            <button
              className="log-out-button"
              onClick={() => setBuyerInfoModal(false)}
            >
              Close
            </button>
          </div>
        ) : null}
      </div>
    </Router>
  );
};

export default ProfilePage;
