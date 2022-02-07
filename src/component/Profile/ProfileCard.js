import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import "./ProfilePage.css";

const ProfileCard = ({ children }) => {
  const user = useContext(UserContext);
  const history = useHistory();

  const refresh = () => {
    history.push("/browse");
    window.location.reload();
  };

  const logOutHandler = () => {
    fetch("http://localhost:3000/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(refresh());
  };

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
          <button onClick={logOutHandler} className="log-out-button">
            Log out
          </button>
        </div>
      </span>
      {children}
    </div>
  );
};

export default ProfileCard;
