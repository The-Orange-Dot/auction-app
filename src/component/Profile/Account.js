import React, { useContext } from "react";
import { UserContext } from "../../App";

const Account = ({ user_month }) => {
  const user = useContext(UserContext);

  return (
    <div className="account-container">
      <h1>Account Info</h1>
      <div>
        <span>
          <h2>Name</h2>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </span>
      </div>
      <div>
        <span>
          <h2>Date of Birth</h2>
          <p>
            <p>{`${String(user.created_at).slice(8, 10)} ${user_month} ${String(
              user.created_at
            ).slice(0, 4)}`}</p>
          </p>
        </span>
      </div>
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
      <div>
        <button className="log-out-button"> Edit info</button>
      </div>
    </div>
  );
};

export default Account;
