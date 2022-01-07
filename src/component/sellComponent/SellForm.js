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
    ticketsBought: 0,
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
    <form
      className="sell-form-container"
      onSubmit={(e) => sellSubmitHandler(e)}
    >
      <input
        type="text"
        name="name"
        placeholder="Name of Product"
        onChange={(e) => inputHandler(e)}
      />
      <select name="category" id="category" onChange={(e) => inputHandler(e)}>
        <option value="" defaultChecked>
          --Select a category--
        </option>
        <option value="electronics">Electronics</option>
        <option value="food/drink">Food / Drinks</option>
        <option value="clothing">Clothing</option>
        <option value="instruments">Instruments</option>
      </select>
      <input
        type="text"
        name="images"
        id="images"
        placeholder="Image Link"
        onChange={(e) => inputHandler(e)}
      />
      <input
        type="text"
        name="descriptionPreview"
        placeholder="Product description preview"
        onChange={(e) => inputHandler(e)}
      />
      <input
        type="textArea"
        name="description"
        placeholder="Product Full Desciption"
        onChange={(e) => inputHandler(e)}
      />
      <input
        type="number"
        name="price"
        id="price"
        placeholder="Total target points for listing"
        onChange={(e) => inputHandler(e)}
      />
      <input
        type="number"
        name="tickets"
        id="tickets"
        placeholder="How many tickets for the listing"
        onChange={(e) => inputHandler(e)}
      />
      <input type="submit" name="submit" id="submit" />
    </form>
  );
};

export default SellForm;
