import React from "react";
import "./NavBar.css";

const SearchBar = () => {
  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
  };

  return (
    <form action="" onSubmit={submitSearch}>
      <input
        type="text"
        name="seach"
        id="search"
        placeholder="What are you lookin' for?"
        onChange={handleChange}
      />
      <input type="submit" name="search" id="submit" />
    </form>
  );
};

export default SearchBar;
