import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

const Account = ({ user_month, setUser }) => {
  const user = useContext(UserContext);
  const [editInfo, setEditInfo] = useState(false);
  const [userInput, setUserInput] = useState({});

  const inputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    fetch(
      `https://boiling-forest-19458.herokuapp.com/users/edit_info/${user.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      }
    )
      .then((r) => r.json())
      .then((updatedUser) => setUser(updatedUser));
    setEditInfo(false);
  };

  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div>
        <div>
          <span>
            {editInfo ? (
              <div className="edit-info">
                <p>
                  <strong>Name: </strong>
                </p>
                <input
                  onChange={inputHandler}
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
                <input
                  onChange={inputHandler}
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            ) : user.firstName.length === 0 && user.lastName.length === 0 ? (
              <p>
                <strong>Name: </strong>You haven't added your name!
              </p>
            ) : (
              <p>
                <strong>Name: </strong>
                {`${
                  user.firstName
                    ? user.firstName[0].toUpperCase() + user.firstName.slice(1)
                    : ""
                } ${
                  user.lastName
                    ? user.lastName[0].toUpperCase() + user.lastName.slice(1)
                    : ""
                }`}
              </p>
            )}
          </span>
        </div>
        <div>
          <span>
            <p>
              <strong>Date of Birth: </strong>
              {`${user_month} ${String(user.created_at).slice(
                8,
                10
              )} , ${String(user.created_at).slice(0, 4)}`}
            </p>
          </span>
        </div>
        <div>
          <span>
            {editInfo ? (
              <div className="edit-info">
                <p>
                  <strong>Email: </strong>
                </p>
                <input
                  onChange={inputHandler}
                  type="text"
                  name="email"
                  placeholder={user.email}
                />
              </div>
            ) : (
              <p>
                <strong>Email: </strong>
                {user.email}
              </p>
            )}
          </span>
        </div>
        <div>
          <span>
            {editInfo ? (
              <div className="edit-info">
                <p>
                  <strong>Shipping Address: </strong>
                </p>
                <input
                  onChange={inputHandler}
                  type="text"
                  name="address"
                  placeholder={user.address ? user.address : "Shipping Address"}
                />
              </div>
            ) : user.address ? (
              <p>
                <strong>Shipping Address: </strong>
                {user.address}
              </p>
            ) : (
              <p>
                <strong>Shipping Address: </strong>Shipping address hasn't been
                added yet
              </p>
            )}
          </span>
        </div>
        <div>
          <span>
            {editInfo ? (
              <div className="edit-info">
                <p>
                  <strong>Billing Address: </strong>
                </p>
                <input
                  onChange={inputHandler}
                  type="text"
                  name="billing_address"
                  placeholder={
                    user.billing_address
                      ? user.billing_address
                      : "Billing Address"
                  }
                />
              </div>
            ) : user.billing_address ? (
              <p>
                <strong>Billing Address: </strong>
                {user.billing_address}
              </p>
            ) : (
              <p>
                <strong>Billing Address: </strong>Billing address hasn't been
                added yet
              </p>
            )}
          </span>
        </div>
        <div>
          <p>
            <strong>Payment Info: </strong>*****************
          </p>
        </div>
        <div className="edit-info-button">
          <button
            className="log-out-button"
            onClick={() => (editInfo ? submitHandler() : setEditInfo(true))}
          >
            {editInfo ? "Submit" : "Edit info"}
          </button>
          {editInfo ? (
            <button
              className="log-out-button"
              onClick={() => setEditInfo(false)}
            >
              Cancel
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Account;
