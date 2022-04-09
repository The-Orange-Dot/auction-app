import React, { useContext } from "react";
import { UserContext } from "../../App";

const ChargePoints = ({ grayIsOn, setUser, mobile }) => {
  const user = useContext(UserContext);

  //Backend will check if the point value and button id are correct before adding points (as security measure)
  const chargePoints = (value, id) => {
    fetch(
      `https://boiling-forest-19458.herokuapp.com/users/charge_points/${user.id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          charge: value,
          points_id: id,
        }),
      }
    ).then(() => {
      //Updates Points
      const finalValue = user.points + value;
      const updatedUser = { ...user, points: finalValue };
      setUser(updatedUser);
    });
  };

  return mobile ? (
    <>
      <div className={grayIsOn ? "" : "mobile-charge-container"}>
        <h1>Fill'er up, chief!</h1>
        <div className="mobile-charge-button-container">
          <span
            className="mobile-charge"
            value="500"
            onClick={() => {
              chargePoints(500, 1);
            }}
          >
            <p>CHARGE</p>
            <h1>500PT</h1>
          </span>
          <span
            className="mobile-charge"
            value="1000"
            onClick={() => {
              chargePoints(1000, 2);
            }}
          >
            <p>CHARGE</p>
            <h1>1,000PT</h1>
          </span>
          <span
            className="mobile-charge"
            value="5000"
            onClick={() => {
              chargePoints(5000, 3);
            }}
          >
            <p>CHARGE</p>
            <h1>5,000PT</h1>
          </span>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className={grayIsOn ? "" : "charge-container"}>
        <h1>Fill'er up, chief!</h1>
        <span
          className="charge"
          value="500"
          onClick={() => {
            chargePoints(500, 1);
          }}
        >
          <p>CHARGE</p>
          <h1>500PT</h1>
        </span>
        <span
          className="charge"
          value="1000"
          onClick={() => {
            chargePoints(1000, 2);
          }}
        >
          <p>CHARGE</p>
          <h1>1,000PT</h1>
        </span>
        <span
          className="charge"
          value="5000"
          onClick={() => {
            chargePoints(5000, 3);
          }}
        >
          <p>CHARGE</p>
          <h1>5,000PT</h1>
        </span>
      </div>
    </>
  );
};

export default ChargePoints;
