import React, { useState, useContext } from "react";
import "./Sell.css";
import { useHistory } from "react-router-dom";
import { ProductContext, UserContext } from "../../App";
import SellBackgroundTween from "./SellBackgroundTween";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";

const SellForm = ({ setProducts, setUser, mobile }) => {
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
  const [descriptionCounter, setDescriptionCounter] = useState(1000);

  const sellSubmitHandler = async (event) => {
    event.preventDefault();
    await fetch("https://boiling-forest-19458.herokuapp.com/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem),
    })
      .then((r) => r.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
      });
    history.push("/browse");
  };

  const inputHandler = (e) => {
    //Updates description character counter
    if (e.target.name === "description") {
      setDescriptionCounter(1000 - parseInt(e.target.value.length));
    }

    //Checks if input is price or ticket and changes it to an integer
    //Updates and stores user input as state
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
        <div
          className={
            mobile ? "mobile-sell-form-container" : "sell-form-container"
          }
        >
          <h1>Sell on MOXIE!</h1>
          <form onSubmit={(e) => sellSubmitHandler(e)}>
            <div>
              <label htmlFor="name">Title: </label>
              <input
                type="text"
                name="name"
                placeholder="Name of Product (Max: 40 chars)"
                onChange={(e) => inputHandler(e)}
                size="66"
                maxLength="40"
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
                <option value="clothing">Clothing/Fashion</option>
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
              <label htmlFor="price">Total Points: </label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Min: 1,000"
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
                placeholder="Min: 3"
                onChange={(e) => inputHandler(e)}
                required
                min="3"
                max="50"
              />
            </div>
            {/* <div>
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
            </div> */}
            <div>
              <label htmlFor="description">Description: </label>
              <textarea
                type="textArea"
                name="description"
                placeholder="Product Full Desciption (Max: 1,000 characters)"
                onChange={(e) => inputHandler(e)}
                required
                maxLength="1000"
                rows={mobile ? "7" : "15"}
                cols="55"
                style={{ resize: "none" }}
              />
              <small className="description-counter">
                {numberWithCommas(descriptionCounter)} characters remaining
              </small>
            </div>
            <div>
              <label htmlFor="keywords">Keywords: </label>
              <textarea
                type="keywords"
                name="keywords"
                placeholder='Seperate keywords with "," (Max: 50 chars)'
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
