import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const handleChange = (event) => {
    console.log(`${event.target.name}: ${event.target.value}`);
  };

  return (
    <form action="">
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
