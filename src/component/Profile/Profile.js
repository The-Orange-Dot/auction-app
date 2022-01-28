import React, { useContext } from "react";
import { UserContext } from "../../App";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className="profile-info-container-tab">
      <h1>Profile test</h1>
      <div>
        <span>
          <h2>Username</h2>
          <p>{user.username}</p>
        </span>
      </div>
      <div>
        <span>
          <h2>First Name</h2>
          <p>{user.firstName}</p>
        </span>
        <span>
          <h2>Last Name</h2>
          <p>{user.lastName}</p>
        </span>
      </div>
      <div className="user-ratings">
        <span>
          <h2>Buyer Rating</h2>
          <p>{user.buyer_rating}</p>
        </span>
        <span>
          <h2>Seller Rating</h2>
          <p>{user.seller_rating}</p>
        </span>
      </div>
      <div>
        <h2>Total Tickets bought:</h2>
        <p>{user.tickets_bought}</p>
      </div>
      <div className="verified">
        {user.verified ? <h2>Verified Seller</h2> : <h3>Not Verified</h3>}
      </div>
    </div>
  );
};

export default Profile;
