import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

const ProfileNavBar = ({ setSellSelected }) => {
  return (
    <span className="profile-nav-bar-category-selector-container">
      <span>Profile</span>

      <span>Account</span>
      <span>Tickets</span>
    </span>
  );
};

export default ProfileNavBar;
