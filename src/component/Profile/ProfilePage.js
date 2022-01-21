import React, { useState } from "react";
import "./ProfilePage.css";
import ProfileNavBar from "./ProfileNavBar";
import ProfileCard from "./ProfileCard";
import {
  useRouteMatch,
  NavLink,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Profile from "./Profile";

const ProfilePage = () => {
  const [sellSelected, setSellSelected] = useState(false);
  const { path, url } = useRouteMatch();

  const linkStyling = {
    color: "black",
    textDecoration: "none",
    width: "100%",
    textAlign: "center",
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
          <span className="profile-nav-bar-category-selector-container">
            <NavLink
              to={`${url}/info`}
              style={linkStyling}
              activeStyle={activeLink}
            >
              <span>Profile</span>
            </NavLink>
            <NavLink
              to={`${url}/account`}
              style={linkStyling}
              activeStyle={activeLink}
            >
              <span>Account</span>
            </NavLink>
            <NavLink
              to={`${url}/tickets`}
              style={linkStyling}
              activeStyle={activeLink}
            >
              <span>Tickets</span>
            </NavLink>
          </span>

          <Switch>
            <Route path={`${path}/info`} component={Profile} />
            <Route path={`${path}/tickets`}>
              <ProfileCard setSellSelected={sellSelected} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default ProfilePage;
