import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  let { profileId } = useParams();

  return <h1>test</h1>;
};

export default Profile;
