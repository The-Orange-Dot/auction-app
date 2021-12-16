import React from "react";

const CategoryFilter = ({ formSubmit }) => {
  return (
    <select
      name="category"
      id="category"
      className="category-selector"
      onChange={formSubmit}
    >
      <option value="">--Category--</option>
      <option value="clothing">Clothing</option>
      <option value="electronics">Electronics</option>
      <option value="food/drink">Food/Drinks</option>
    </select>
  );
};

export default CategoryFilter;
