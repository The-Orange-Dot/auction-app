import React from "react";
import "./NavBar.css";

const SearchBar = ({ searchHandler }) => {
  return (
    <div className="search-bar">
      <form action="">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Whatcha lookin' for?"
          onChange={searchHandler}
        />
      </form>
    </div>
  );
};

export default SearchBar;
