import React from "react";
import "./NavBar.css";

const SearchBar = ({ searchHandler }) => {
  //This component is used in the 'App' component, but is rendered on the navbar
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
