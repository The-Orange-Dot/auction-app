import React from "react";
import Logo from "./Logo";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import UserPreview from "./UserPreview";
import { NavLink } from "react-router-dom";

const NavBar = ({ searchHandler, user, pageLoaded }) => {
  //All the NavBar logic can go in here!!!

  return (
    <div className="navbar">
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <Logo />
      </NavLink>
      <SearchBar searchHandler={searchHandler} />

      <UserPreview user={user} pageLoaded={pageLoaded} />
    </div>
  );
};

export default NavBar;
