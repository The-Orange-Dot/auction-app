import React from "react";

const RemainingTicketsFilter = () => {
  return (
    <select name="remaining-tickets" id="remaining-tickets">
      <option value="">--Tickets Remaining--</option>
      <option value="50">50</option>
      <option value="25-49">25-49</option>
      <option value="10-20">10-20</option>
      <option value="u10">Under 10</option>
    </select>
  );
};

export default RemainingTicketsFilter;
