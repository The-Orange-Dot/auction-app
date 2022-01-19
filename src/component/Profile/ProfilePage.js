import React from "react";
import "./ProfilePage.css";
import ProfileNavBar from "./ProfileNavBar";
import ProfileCard from "./ProfileCard";

const ProfilePage = () => {
  return (
    <div className="profile-page-container">
      <div className="profile-info-container">
        <ProfileNavBar />
        <ProfileCard />
      </div>
    </div>
  );
};

export default ProfilePage;
