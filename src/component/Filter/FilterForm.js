import React from "react";
import "./Filter.css";
import CategoryFilter from "./CategoryFilter";
import TotalTicketsFilter from "./TotalTicketsFilter";
import RemainingTicketsFilter from "./RemainingTicketsFilter";
import TimeRemainingFilter from "./TimeRemainingFilter";

const FilterForm = ({ filterHandler }) => {
  const formSubmit = (event) => {
    filterHandler(event.target.value);
  };
  return (
    <div className="form">
      <h2>Filter</h2>
      <CategoryFilter formSubmit={formSubmit} />
      {/* <TotalTicketsFilter formSubmit={formSubmit} />
      <RemainingTicketsFilter />
      <TimeRemainingFilter /> */}
    </div>
  );
};

export default FilterForm;
