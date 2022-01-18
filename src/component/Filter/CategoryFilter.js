import React from "react";

const CategoryFilter = ({ formSubmit }) => {
  return (
    <select
      name="category"
      id="category"
      className="filter-selector"
      onChange={formSubmit}
    >
      <option value="">--Category--</option>
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="food/drink">Food/Drinks</option>
      <option value="instruments">Musical Instruments</option>
    </select>
  );
};

export default CategoryFilter;
