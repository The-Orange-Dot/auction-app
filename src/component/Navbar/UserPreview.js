import React, { useState, useContext } from "react";
import "./NavBar.css";
import { users as userDefault } from "../../userDb";
import ChargePoints from "./ChargePoints";
import { NavLink } from "react-router-dom";
import { LoginContext, UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";

const UserPreview = ({ pageLoaded, setUser }) => {
  const loggedIn = useContext(LoginContext);
  const [grayIsOn, setGrayIsOn] = useState(true);
  const user = useContext(UserContext);

  //This stops scrolling when gray screen is up
  document.body.style.overflow = grayIsOn ? "" : "hidden";

  return (
    <span className="user-info-container">
      {grayIsOn ? null : <ChargePoints setUser={setUser} />}
      <div
        className={grayIsOn ? "hide-gray" : "show-gray"}
        onClick={() => setGrayIsOn(!grayIsOn)}
      />

      {loggedIn ? (
        <>
          <div className="profile-container">
            <NavLink to="/profile/info">
              <img src={user.picture} alt="selfie" className="user-photo" />
            </NavLink>
            <small className="points" onClick={() => setGrayIsOn(!grayIsOn)}>
              Points:
              {pageLoaded
                ? numberWithCommas(user.points)
                : numberWithCommas(userDefault.points)}
            </small>
          </div>

          <NavLink to="/sell" style={{ textDecoration: "none" }}>
            <h2 className="nav-button">Sell</h2>
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" style={{ textDecoration: "none" }}>
          <h2 className="nav-button">Login</h2>
        </NavLink>
      )}
      <NavLink to="/browse" style={{ textDecoration: "none" }}>
        <h2 className="nav-button">Browse</h2>
      </NavLink>
    </span>
  );
};

export default UserPreview;
