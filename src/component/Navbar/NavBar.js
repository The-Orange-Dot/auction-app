import React from "react";
import Logo from "./Logo";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import UserPreview from "./UserPreview";

const NavBar = ({ searchHandler }) => {
  //All the NavBar logic can go in here!!!

  return (
    <div className="navbar">
      <Logo />
      <SearchBar searchHandler={searchHandler} />
      <UserPreview />
    </div>
  );
};

export default NavBar;
