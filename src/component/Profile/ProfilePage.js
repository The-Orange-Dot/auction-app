import React, { useState } from "react";
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

const ProfilePage = ({ user }) => {
  const [sellSelected, setSellSelected] = useState(false);
  const { path, url } = useRouteMatch();

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
                        <h1>Your List</h1>
                        {sellSelected ? (
                          <SellerItemsCard user={user} />
                        ) : (
                          <BuyingItemsCard user={user} />
                        )}
                      </div>
                    </span>
                  </Route>
                  <Route path={`${path}/account`}>
                    <Account />
                  </Route>
                  <Route path={`${path}/info`} component={Profile} />
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
