import React, { useEffect, useState } from "react";
import "./NavBar.css";
import { users as userDefault } from "../../userDb";
import ChargePoints from "./ChargePoints";
import { NavLink } from "react-router-dom";

const UserPreview = () => {
  const [grayIsOn, setGrayIsOn] = useState(true);
  const [users, setUsers] = useState([]);
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((r) => r.json())
      .then((userData) => {
        setUsers(userData);
        setPageLoaded(true);
      });
  }, []);
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
        <NavLink to="profile">
          <img
            src={userDefault[0].picture}
            alt="selfie"
            className="user-photo"
          />
        </NavLink>
        <small className="points" onClick={() => setGrayIsOn(!grayIsOn)}>
          Points: {pageLoaded ? users[0].points : userDefault[0].points}
        </small>
      </div>

      <NavLink to="/sell" style={{ textDecoration: "none" }}>
        <h2>Sell</h2>
      </NavLink>
      <NavLink to="/browse" style={{ textDecoration: "none" }}>
        <h2>Browse</h2>
      </NavLink>
    </span>
  );
};

export default UserPreview;
