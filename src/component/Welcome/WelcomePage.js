import React, { useEffect } from "react";
import "./WelcomePage.css";
import ticket from "../../database/images/Ticket.png";
import { NavLink } from "react-router-dom";
import InfoPage from "../Info/InfoPage";
import { scrollHandler } from "../BaseComponents/ScrollHandler";
import { gsap } from "gsap/all";
import { onEnterTicket, onLeaveTicket } from "../Animation/WiggleOnEnter";

const WelcomePage = ({ mobile }) => {
  useEffect(() => {
    scrollHandler(-10000);
    gsap
      .timeline()
      .fromTo(
        ".welcome-page-background",
        { opacity: 0, rotate: 20, x: 60, y: -300 },
        { opacity: 0.9, y: -250, ease: "Power4.easeout", duration: 0.7 }
      )
      .from(
        ".welcome-page-header > h1, p, button",
        {
          opacity: 0,
          delay: 0.2,
          y: -60,
          duration: 0.6,
        },
        0.6
      )
      .fromTo(
        ".ticket",
        {
          x: 1000,
        },
        { x: 0, stagger: 0.25, ease: "Power4.easeout", duration: 0.3 }
      );

    gsap.timeline({ repeat: -1, yoyo: true, ease: "Power.easeOut" }).to(".SD", {
      y: 1,
      duration: 1,
    });
  }, []);

  return mobile ? (
    <div className="mobile-welcome-container">
      <div className="welcome-page-header">
        <h1>Bring some excitement to your shopping</h1>
        <p>Find thousands of products and pay only a fraction of the cost!</p>
        <div
          style={{
            paddingTop: 20,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <NavLink to="/browse">
            <button>Start Searching</button>
          </NavLink>
          <button onClick={() => scrollHandler(800)}>More Info</button>
        </div>
      </div>
      <InfoPage mobile={mobile} />
    </div>
  ) : (
    <div className="welcome-page-container">
      <div>
        <div className="welcome-page-background"></div>
      </div>
      <div className="welcome-page-header">
        <h1>Bring some excitement to your shopping</h1>
        <p>Find thousands of products and pay only a fraction of the cost!</p>

        <div className="tickets">
          <img
            src={ticket}
            alt="ticket"
            className="welcome-ticket-image-1 ticket"
            onMouseEnter={onEnterTicket}
            onMouseLeave={onLeaveTicket}
          />
          <img
            src={ticket}
            alt="ticket"
            className="welcome-ticket-image-2 ticket"
            onMouseEnter={onEnterTicket}
            onMouseLeave={onLeaveTicket}
          />
          <img
            src={ticket}
            alt="ticket"
            className="welcome-ticket-image-3 ticket"
            onMouseEnter={onEnterTicket}
            onMouseLeave={onLeaveTicket}
          />
        </div>
        <div>
          <NavLink to="/browse">
            <button>Start Searching</button>
          </NavLink>
          <button onClick={() => scrollHandler(800)}>More Info</button>
        </div>
      </div>
      <InfoPage />
      <p className="scroll-down SD">Scroll down</p>
    </div>
  );
};

export default WelcomePage;
