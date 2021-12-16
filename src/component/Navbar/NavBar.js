import React from "react";
import Logo from "./Logo";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import UserPreview from "./UserPreview";

const NavBar = ({ onGrayHandler }) => {
  //All the NavBar logic can go in here!!!

  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <UserPreview onGrayHandler={onGrayHandler} />
    </div>
  );
};

export default NavBar;
