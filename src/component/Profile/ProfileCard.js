import React, { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
import { numberWithCommas } from "../BaseComponents/NumberWithCommas";
import "./ProfilePage.css";

const ProfileCard = ({ children, setLoggedIn, mobile }) => {
  const user = useContext(UserContext);
  const history = useHistory();

  //Logs user out, removes user info from localStorage, directs them back to Browse page
  const refresh = () => {
    history.push("/browse");
    window.location.reload();
    localStorage.removeItem("user");
    setLoggedIn(false);
  };

  //Deleted sessions server side
  const logOutHandler = () => {
    fetch("https://boiling-forest-19458.herokuapp.com/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    refresh();
  };

  return (
    <div
      className={
        mobile ? "mobile-profile-card-container" : "profile-card-container"
      }
    >
      {mobile ? null : (
        <span className="profile-card-user-container">
          <div className="profile-card-user-picture">
            <div className="profile-picture-overlay" />
            <img src={user.picture} alt="profile" />
          </div>
          <div className="profile-card-user-info">
            <h1>Points: {numberWithCommas(user.points)}</h1>
            <h3>{user.username}</h3>
            <h3>
              {user.firstName
                ? user.firstName[0].toUpperCase() + user.firstName.slice(1)
                : ""}
              {user.lastName
                ? user.lastName[0].toUpperCase() + user.lastName.slice(1)
                : ""}
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
      )}
      {children}
    </div>
  );
};

export default ProfileCard;
