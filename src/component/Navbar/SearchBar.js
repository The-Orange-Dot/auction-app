import React from "react";
import "./NavBar.css";

const SearchBar = ({ searchHandler }) => {
  // const handleChange = (event) => {
  //   console.log(`${event.target.name}: ${event.target.value}`);
  // };

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
        onChange={searchHandler}
      />
    </form>
  );
};

export default SearchBar;
