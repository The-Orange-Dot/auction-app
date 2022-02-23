import React from "react";

const CategoryNav = ({ filterHandler }) => {
  const formSubmit = (event) => {
    if (event.target.textContent === "Video Games") {
      filterHandler(event.target.textContent.split(" ")[1].toLowerCase());
    } else if (event.target.textContent === "All") {
      filterHandler("");
    } else {
      filterHandler(event.target.textContent.toLowerCase());
    }
  };

  return (
    <div className="category-nav-bar">
      <span onClick={formSubmit}>All</span>
      <span onClick={formSubmit}>Clothing/Fashion</span>
      <span onClick={formSubmit}>Electronics</span>
      <span onClick={formSubmit}>Video Games</span>
      <span onClick={formSubmit}>Music</span>
      <span onClick={formSubmit}>Vintage</span>
      <span onClick={formSubmit}>Beauty</span>
      <span onClick={formSubmit}>Sports</span>
      <span onClick={formSubmit}>Food/Drink</span>
      <span onClick={formSubmit}>Hobbies</span>
    </div>
  );
};

export default CategoryNav;
