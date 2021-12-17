import React from "react";

const ChargePoints = ({ grayIsOn }) => {
  return (
    <div className={grayIsOn ? "" : "charge-container"}>
      <span className="charge" value="500">
        <p>CHARGE</p>
        <h1>500PT</h1>
      </span>
      <span className="charge" value="1000">
        <p>CHARGE</p>
        <h1>1,000PT</h1>
      </span>
      <span className="charge" value="5000">
        <p>CHARGE</p>
        <h1>5,000PT</h1>
      </span>
    </div>
  );
};

export default ChargePoints;
