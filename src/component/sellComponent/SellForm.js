import React, { useState, useContext } from "react";
import "./Sell.css";
import { useHistory } from "react-router-dom";
import { ProductContext, UserContext } from "../../App";
import SellBackgroundTween from "./SellBackgroundTween";

const SellForm = ({ setProducts, setUser }) => {
  const user = useContext(UserContext);
  const products = useContext(ProductContext);
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
    user_id: null,
  });

  const sellSubmitHandler = (event) => {
    event.preventDefault();
    history.push("/browse");
    fetch("https://boiling-forest-19458.herokuapp.com/products", {
      method: "POST",

      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
      });
  };

  const inputHandler = (e) => {
    const numberData = { ...newItem };
    numberData.user_id = user.id;
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
    <SellBackgroundTween>
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
                required
              >
                <option value="" defaultChecked>
                  --Select a category--
                </option>
                <option value="clothing">Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="games">Video-Games</option>
                <option value="instruments">Instruments</option>
                <option value="music">Music</option>
                <option value="vintage">Vintage</option>
                <option value="beauty">Beauty</option>
                <option value="sports">Sports</option>
                <option value="food/drink">Food/Drinks</option>
                <option value="hobbies">Hobbies</option>
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
                onChange={(e) => inputHandler(e)}
                required
                min="1000"
              />
            </div>
            <div>
              <label htmlFor="tickets">Number of Tickets: </label>
              <input
                type="number"
                name="tickets"
                id="tickets"
                onChange={(e) => inputHandler(e)}
                required
                min="3"
                max="50"
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
                rows="3"
                maxLength="40"
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
                maxLength="200"
                rows="5"
                cols="55"
                style={{ resize: "none" }}
              />
            </div>
            <div>
              <label htmlFor="keywords">Keywords: </label>
              <textarea
                type="keywords"
                name="keywords"
                placeholder='Seperate keywords with ","'
                onChange={(e) => inputHandler(e)}
                maxLength="50"
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
    </SellBackgroundTween>
  );
};

export default SellForm;
