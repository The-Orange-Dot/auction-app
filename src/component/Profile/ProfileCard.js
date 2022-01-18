import React from "react";
import SellerItemsCard from "./SellerItemsCard";

const ProfileCard = ({ user }) => {
  const numberWithCommas = (user) => {
    return Math.floor(user.points)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="profile-card-container">
      <span className="profile-card-user-container">
        <div>
          <img
            src={user.picture}
            alt=""
            className="profile-card-user-picture"
          />
        </div>
        <div className="profile-card-user-info">
          <h1>Points: {numberWithCommas(user)}</h1>
          <h3>{user.username}</h3>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>{user.email}</p>
          <div>
            <p>{user.address}</p>
          </div>
        </div>
      </span>
      <span className="bid-items-container">
        <div>
          <h1>Tickets Being Held!</h1>
        </div>
        <div>
          <h1>Your listing</h1>
          <SellerItemsCard user={user} />
        </div>
      </span>
    </div>
  );
};

export default ProfileCard;
