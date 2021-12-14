import React from "react";
import Logo from "./Logo";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import UserPreview from "./UserPreview";

const NavBar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <UserPreview />
    </div>
  );
};

export default NavBar;
