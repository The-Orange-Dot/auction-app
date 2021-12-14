import React from "react";
import "./UserPreview.css";
import { users } from "../../userDb";

const UserPreview = () => {
  return (
    <span className="user-info-container">
      <img src={users[0].picture} alt="selfie" className="user-photo" />
      <small className="points">Points: {users[0].points}</small>
    </span>
  );
};

export default UserPreview;
