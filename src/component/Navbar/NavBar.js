import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import UserPreview from "./UserPreview";

const NavBar = () => {
  return (
    <div className="navbar">
      <SearchBar />
      <UserPreview />
    </div>
  );
};

export default NavBar;
