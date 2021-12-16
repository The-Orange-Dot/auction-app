import React from "react";
import "./Filter.css";
import FilterForm from "./FilterForm";

const Filter = ({ filterHandler }) => {
  return (
    <div className="filter-bar">
      <FilterForm filterHandler={filterHandler} />
    </div>
  );
};

export default Filter;
