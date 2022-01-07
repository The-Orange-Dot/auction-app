import React from "react";
import "./InfoPage.css";

const InfoPage = () => {
  return (
    <div className="info-page-container">
      <h1>How it works</h1>
      <div className="info-description">
        <p>
          Vendors put items on the site and list their price just like any other
          e-commerce website. The only difference is, vendors can split the
          price up into tickets!
        </p>
        <p>
          Buyers can purchase these tickets using their points. You can buy one,
          two, or even all of the tickets. The more tickets you buy, the higher
          your chances of winning the item.
        </p>
        <p>
          Once all the tickets are purchased, one of the tickets, chosen
          randomly, is selected and the holder of that ticket receive the item!
        </p>
      </div>
    </div>
  );
};

export default InfoPage;
