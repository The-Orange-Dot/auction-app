import React from "react";
import Logo from "./Logo";
import "./NavBar.css";
import UserPreview from "./UserPreview";
import { NavLink } from "react-router-dom";

const NavBar = ({ pageLoaded, setUser, mobile }) => {
  //All the NavBar logic can go in here!!!

  return (
    <div className="navbar-container">
      <div className="navbar">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <Logo mobile={mobile} />
        </NavLink>

        <UserPreview
          pageLoaded={pageLoaded}
          setUser={setUser}
          mobile={mobile}
        />
      </div>
    </div>
  );
};

export default NavBar;
