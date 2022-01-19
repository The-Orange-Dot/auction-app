import React, { useContext } from "react";
import { UserContext } from "../../App";
import SellerItemsCard from "./SellerItemsCard";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";

const ProfileCard = () => {
  const user = useContext(UserContext);

  return (
    <div className="profile-card-container">
      <span className="profile-card-user-container">
        <div className="profile-card-user-picture">
          <div className="profile-picture-overlay" />
          <img src={user.picture} alt="profile" />
        </div>
        <div className="profile-card-user-info">
          <h1>Points: {numberWithCommas(user.points)}</h1>
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
        <div className="hidden">
          <h1>Tickets Being Held!</h1>
        </div>
        <div className="">
          <h1>Your listings</h1>
          <SellerItemsCard user={user} />
        </div>
      </span>
    </div>
  );
};

export default ProfileCard;
