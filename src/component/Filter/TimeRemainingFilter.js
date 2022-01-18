import React from "react";

const TimeRemainingFilter = () => {
  return (
    <select name="time" id="time" className="filter-selector">
      <option value="">--Time Remaining--</option>
      <option value="5">Over 5 days</option>
      <option value="3">Over 3 days</option>
      <option value="1">Over 1 days</option>
      <option value="u1">Under 1 day</option>
    </select>
  );
};

export default TimeRemainingFilter;
