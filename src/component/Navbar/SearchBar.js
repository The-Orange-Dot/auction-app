import React from "react";
import "./NavBar.css";

const SearchBar = ({ searchHandler }) => {
  return (
    <form action="">
      <input
        type="text"
        name="seach"
        id="search"
        placeholder="What are you lookin' for?"
        onChange={searchHandler}
      />
    </form>
  );
};

export default SearchBar;
