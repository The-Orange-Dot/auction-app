import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

const Account = ({ user_month, setUser }) => {
  const user = useContext(UserContext);
  const [editInfo, setEditInfo] = useState(false);
  const [userInput, setUserInput] = useState({});

  const inputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  console.log(userInput);

  const submitHandler = () => {
    fetch(`https://boiling-forest-19458.herokuapp.com/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    })
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
            <h2>Name</h2>
            {editInfo ? (
              <span>
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
              </span>
            ) : user.firstName.length === 0 && user.lastName.length === 0 ? (
              <p>You haven't added your name!</p>
            ) : (
              <p>{`${
                user.firstName
                  ? user.firstName[0].toUpperCase() + user.firstName.slice(1)
                  : ""
              } ${
                user.lastName
                  ? user.lastName[0].toUpperCase() + user.lastName.slice(1)
                  : ""
              }`}</p>
            )}
          </span>
        </div>
        <div>
          <span>
            <h2>Date of Birth</h2>
            <p>
              <p>{`${user_month} ${String(user.created_at).slice(
                8,
                10
              )} , ${String(user.created_at).slice(0, 4)}`}</p>
            </p>
          </span>
        </div>
        <div>
          <span>
            <h2>Email</h2>
            {editInfo ? (
              <input
                onChange={inputHandler}
                type="text"
                name="email"
                placeholder={user.email}
              />
            ) : (
              <p>{user.email}</p>
            )}
          </span>
        </div>
        <div>
          <span>
            <h2>Shipping Address</h2>

            {editInfo ? (
              <input
                onChange={inputHandler}
                type="text"
                name="address"
                placeholder={user.address ? user.address : "Shipping Address"}
              />
            ) : user.address ? (
              <p>Shipping address hasn't been added yet</p>
            ) : (
              <p>{user.address}</p>
            )}
          </span>
          <span>
            <h2>Billing Address</h2>
            {editInfo ? (
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
            ) : user.billing_address ? (
              <p>{user.billing_address}</p>
            ) : (
              <p>Billing address hasn't been added yet</p>
            )}
          </span>
        </div>
        <div>
          <h2>Payment Info</h2>
          <p>*****************</p>
        </div>
        <div>
          <button
            className="log-out-button"
            onClick={() => (editInfo ? submitHandler() : setEditInfo(true))}
          >
            {" "}
            Edit info
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
