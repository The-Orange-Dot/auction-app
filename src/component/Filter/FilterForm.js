import React from "react";
import "./FilterForm.css";

const FilterForm = () => (
  <div className="form">
    <h2>Filter</h2>
    <form action="">
      <select name="category" id="category" className="category-selector">
        <option value="">--Category--</option>
        <option value="clothing">Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="food">Food/Drinks</option>
      </select>
      <select name="total-tickets" id="total-tickets">
        <option value="">--Total Tickets--</option>
        <option value="50">50</option>
        <option value="25-49">21-49</option>
        <option value="10-20">10-20</option>
        <option value="u10">Under 10</option>
      </select>
      <select name="remaining-tickets" id="remaining-tickets">
        <option value="">--Tickets Remaining--</option>
        <option value="50">50</option>
        <option value="25-49">25-49</option>
        <option value="10-20">10-20</option>
        <option value="u10">Under 10</option>
      </select>
      <select name="time" id="time">
        <option value="">--Time Remaining--</option>
        <option value="5">Over 5 days</option>
        <option value="3">Over 3 days</option>
        <option value="1">Over 1 days</option>
        <option value="u1">Under 1 day</option>
      </select>
    </form>
  </div>
);

export default FilterForm;
