import React, { useContext } from "react";
import { UserContext } from "../../App";
import SellerItemsCard from "./SellerItemsCard";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import BuyingItemsCard from "./BuyingItemsCard";
import "./ProfilePage.css";

const ProfileCard = ({ sellSelected }) => {
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
        <div className="">
          <h1>Your List</h1>
          {sellSelected ? (
            <SellerItemsCard user={user} />
          ) : (
            <BuyingItemsCard user={user} />
          )}
        </div>
      </span>
    </div>
  );
};

export default ProfileCard;
