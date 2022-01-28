import React, { useContext } from "react";
import { UserContext } from "../../App";

const Account = () => {
  const user = useContext(UserContext);

  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div>
        <span>
          <h2>Email</h2>
          <p>{user.email}</p>
        </span>
      </div>
      <div>
        <span>
          <h2>Shipping Address</h2>
          <p>{user.address}</p>
        </span>
        <span>
          <h2>Billing Address</h2>
          <p>{user.address}</p>
        </span>
      </div>
      <div>
        <h2>Payment Info</h2>
        <p>*****************</p>
      </div>
    </div>
  );
};

export default Account;
