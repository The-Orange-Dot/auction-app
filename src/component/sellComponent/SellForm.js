import React, { useState } from "react";
import "./Sell.css";
import { useHistory } from "react-router-dom";

const SellForm = ({ products, setProducts }) => {
  const history = useHistory();
  const [newItem, setNewItem] = useState({
    name: "",
    category: "",
    descriptionPreview: "",
    description: "",
    images: "",
    price: 0,
    ticketsRemining: 0,
    tickets: 0,
  });

  const sellSubmitHandler = (event) => {
    event.preventDefault();
    history.push("/browse");
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then((newItem) => setProducts([...products, newItem]));
  };

  const inputHandler = (e) => {
    const numberData = { ...newItem };
    if (e.target.name === "price") {
      const price = parseInt(e.target.value);
      setNewItem({ ...numberData, [e.target.name]: price });
    } else if (e.target.name === "tickets") {
      const tickets = parseInt(e.target.value);
      setNewItem({
        ...numberData,
        [e.target.name]: tickets,
      });
    } else {
      setNewItem({ ...numberData, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="sell-background">
      <div className="sell-form-container">
        <h1>Sell on MOXIE!</h1>
        <form onSubmit={(e) => sellSubmitHandler(e)}>
          <div>
            <label htmlFor="name">Title: </label>
            <input
              type="text"
              name="name"
              placeholder="Name of Product"
              onChange={(e) => inputHandler(e)}
              size="66"
              required
            />
          </div>
          <div>
            <label htmlFor="category">Category: </label>
            <select
              name="category"
              id="category"
              onChange={(e) => inputHandler(e)}
            >
              <option value="" defaultChecked>
                --Select a category--
              </option>
              <option value="electronics">Electronics</option>
              <option value="food/drink">Food / Drinks</option>
              <option value="clothing">Clothing</option>
              <option value="instruments">Instruments</option>
            </select>
          </div>
          <div>
            <label htmlFor="images">Image: </label>
            <input
              type="text"
              name="images"
              id="images"
              placeholder="Image Link"
              onChange={(e) => inputHandler(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="price">Total Price: </label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Total target points for listing"
              onChange={(e) => inputHandler(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="tickets">Number of Tickets: </label>
            <input
              type="number"
              name="tickets"
              id="tickets"
              placeholder="How many tickets for the listing"
              onChange={(e) => inputHandler(e)}
              required
            />
          </div>
          <div>
            <label htmlFor="descriptionPreview">Short Description: </label>
            <textarea
              type="textArea"
              name="descriptionPreview"
              placeholder="Product description preview"
              onChange={(e) => inputHandler(e)}
              required
              cols="55"
              rows="5"
              maxLength="120"
              style={{ resize: "none" }}
            />
          </div>
          <div>
            <label htmlFor="description">Full Description: </label>
            <textarea
              type="textArea"
              name="description"
              placeholder="Product Full Desciption"
              onChange={(e) => inputHandler(e)}
              required
              maxLength="300"
              rows="10"
              cols="55"
              style={{ resize: "none" }}
            />
          </div>

          <input
            type="submit"
            name="submit"
            id="submit"
            className="sell-submit-button"
          />
        </form>
      </div>
    </div>
  );
};

export default SellForm;
