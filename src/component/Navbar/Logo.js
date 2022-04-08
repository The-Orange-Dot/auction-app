import React from "react";
import "./NavBar.css";

const Logo = ({ mobile }) => {
  return <h1 className={mobile ? "mobile-logo" : "logo"}>MOXIE</h1>;
};

export default Logo;
