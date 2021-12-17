import React, { useState } from "react";
import "./NavBar.css";
import { users } from "../../userDb";
import ChargePoints from "./ChargePoints";

const UserPreview = () => {
  const [grayIsOn, setGrayIsOn] = useState(true);

  //This stops scrolling when gray screen is up
  document.body.style.overflow = grayIsOn ? "" : "hidden";

  return (
    <span className="user-info-container">
      {grayIsOn ? null : <ChargePoints />}
      <div
        className={grayIsOn ? "hide-gray" : "show-gray"}
        onClick={() => setGrayIsOn(!grayIsOn)}
      />
      <img src={users[0].picture} alt="selfie" className="user-photo" />
      <small className="points" onClick={() => setGrayIsOn(!grayIsOn)}>
        Points: {users[0].points}
      </small>
    </span>
  );
};

export default UserPreview;
