import React from "react";
import "./ProfilePage.css";
import ProfileNavBar from "./ProfileNavBar";
import ProfileCard from "./ProfileCard";

const ProfilePage = ({ user }) => {
  return (
    <div className="profile-page-container">
      <div className="profile-info-container">
        <ProfileNavBar />
        <ProfileCard user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
