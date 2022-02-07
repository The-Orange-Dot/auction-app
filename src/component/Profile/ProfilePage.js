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

const ProfilePage = ({ setProducts, setUser }) => {
  const user = useContext(UserContext);
  const [sellSelected, setSellSelected] = useState(false);
  const { path, url } = useRouteMatch();

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

  return (
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
              <ProfileCard setSellSelected={sellSelected}>
                <Switch>
                  <Route path={`${path}/tickets`}>
                    <span className="bid-items-container">
                      <div>
                        <BuyerSellerSelector
                          setSellSelected={setSellSelected}
                        />

                        <h1>Your {sellSelected ? "Sell" : "Buy"} List</h1>
                        {sellSelected ? (
                          <SellerItemsCard
                            user={user}
                            setProducts={setProducts}
                            setUser={setUser}
                          />
                        ) : (
                          <BuyingItemsCard user={user} />
                        )}
                      </div>
                    </span>
                  </Route>
                  <Route path={`${path}/account`}>
                    <Account user_month={user_month} />
                  </Route>
                  <Route path={`${path}/info`}>
                    <Profile user_month={user_month} />
                  </Route>
                </Switch>
              </ProfileCard>
            </div>
          </span>
        </div>
      </div>
    </Router>
  );
};

export default ProfilePage;
