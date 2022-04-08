import React from "react";
import "./InfoPage.css";

const Copyright = ({ mobile }) => {
  return (
    <div className={mobile ? "mobile-copyright" : "copyright"}>
      <p>Designed and Coded by Hung Le.</p>
    </div>
  );
};

export default Copyright;
