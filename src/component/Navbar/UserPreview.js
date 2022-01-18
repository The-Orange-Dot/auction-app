import React, { useState } from "react";
import "./NavBar.css";
import { users as userDefault } from "../../userDb";
import ChargePoints from "./ChargePoints";
import { NavLink } from "react-router-dom";

const UserPreview = ({ user, pageLoaded }) => {
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

      <div className="profile-container">
        <NavLink to="/profile">
          <img src={user.picture} alt="selfie" className="user-photo" />
        </NavLink>
        <small className="points" onClick={() => setGrayIsOn(!grayIsOn)}>
          Points: {pageLoaded ? user.points : userDefault.points}
        </small>
      </div>

      <NavLink to="/sell" style={{ textDecoration: "none" }}>
        <h2 className="nav-button">Sell</h2>
      </NavLink>
      <NavLink to="/browse" style={{ textDecoration: "none" }}>
        <h2 className="nav-button">Browse</h2>
      </NavLink>
    </span>
  );
};

export default UserPreview;
