import React from "react";
import "./WelcomePage.css";
import ticket from "../../database/images/Ticket.png";
import { NavLink } from "react-router-dom";
import InfoPage from "../Info/InfoPage";

const WelcomePage = () => {
  const scrollHandler = (vertical) => {
    window.scrollBy({ top: vertical, behavior: "smooth" });
  };

  return (
    <div className="welcome-page-container">
      <div>
        <div className="welcome-page-background"></div>
      </div>
      <div>
        <h1>Bring some excitement to your shopping</h1>
        <p>Find thousands of products and pay only a fraction of the cost!</p>
        <div>
          <img src={ticket} alt="ticket" className="welcome-ticket-image-1" />
          <img src={ticket} alt="ticket" className="welcome-ticket-image-2" />
          <img src={ticket} alt="ticket" className="welcome-ticket-image-3" />
        </div>
        <div>
          <NavLink to="/browse">
            <button>Start Searching</button>
          </NavLink>
          <button onClick={() => scrollHandler(1000)}>More Info</button>
        </div>
      </div>
      <InfoPage />
    </div>
  );
};

export default WelcomePage;
