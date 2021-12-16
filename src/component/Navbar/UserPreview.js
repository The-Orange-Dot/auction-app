import React from "react";
import "./NavBar.css";
import { users } from "../../userDb";

const UserPreview = ({ grayIsOff }) => {
  return (
    <span className="user-info-container">
      <img src={users[0].picture} alt="selfie" className="user-photo" />
      <small className="points" onClick={() => console.log(grayIsOff)}>
        Points: {users[0].points}
      </small>
    </span>
  );
};

export default UserPreview;
