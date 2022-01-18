import React from "react";

const TotalTicketsFilter = ({ formSubmit }) => {
  return (
    <select
      name="total-tickets"
      id="total-tickets"
      className="filter-selector"
      onChange={formSubmit}
    >
      <option value="0">--Total Tickets--</option>
      <option value="50">50</option>
      <option value="25">21-49</option>
      <option value="10">10-20</option>
      <option value="1">Under 10</option>
    </select>
  );
};

export default TotalTicketsFilter;
