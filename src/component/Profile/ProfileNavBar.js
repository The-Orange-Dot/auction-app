import React from "react";
import { Switch, Route } from "react-router-dom";

const ProfileNavBar = () => {
  return (
    <span className="profile-nav-bar-category-selector-container">
      <span>Profile</span>
      <span>Account</span>
      <span>Tickets</span>
      {/* <span className="profile-page-navbar-background"></span> */}
    </span>
  );
};

export default ProfileNavBar;
