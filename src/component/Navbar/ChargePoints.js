import React, { useState } from "react";
import "./NavBar.css";

const ChargePoints = () => {
  const [grayIsOff, setGrayIsOff] = useState("hidden");

  const grayHandler = (e) => {
    let grayOverlay = e.target.className;
    grayOverlay === "gray" ? setGrayIsOff("hidden") : setGrayIsOff("gray");
  };

  return (
    <div
      className={grayIsOff}
      onClick={(e) => {
        grayHandler(e);
      }}
    ></div>
  );
};

export default ChargePoints;
