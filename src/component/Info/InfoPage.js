import React from "react";
import "./InfoPage.css";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import lighter from "../../database/images/lighter.png";
import dollar from "../../database/images/dollar-sign.png";
import ticket from "../../database/images/Ticket.png";
import takeTicketF from "../../database/images/take-ticket-female.png";
import happy from "../../database/images/happy.png";
import present from "../../database/images/present.png";

const InfoPage = () => {
  const el = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          start: "65% top",
          end: "100% top",
          setAction: "play none none reverse",
          stagger: 10,
          scrub: 1,
        },
      })
      .fromTo(
        ".info-page-how-it-works",
        { opacity: 0, x: 400 },
        {
          opacity: 1,
          x: 400,
        }
      )
      .fromTo(
        ".info-1",
        { x: -800, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "back",
        }
      )
      .fromTo(
        ".boy-with-lighter",
        { opacity: 0 },
        {
          opacity: 1,
          x: -100,
        }
      )
      .fromTo(
        ".dollar-sign",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 1,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          start: "110% top",
          end: "110% top",
          scrub: 2,
          setAction: "play none none reverse",
        },
      })
      .fromTo(
        ".info-2",
        { x: -800, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          ease: "back",
        }
      )
      .to(".dollar-sign", {
        y: 600,
        x: -400,
        ease: "Power2.out",
      });

    gsap
      .timeline({
        scrollTrigger: {
          start: "155% top",
          end: "190% top",
          scrub: 1,
          setAction: "play none none reverse",
        },
      })
      .fromTo(
        ".ticket-info-1",
        {
          opacity: 0,
          rotate: "+90",
          x: 0,
          y: -600,
        },
        { opacity: 1, x: -400, y: 0, rotate: "+90", scale: 1 }
      )
      .fromTo(
        ".ticket-info-2",
        {
          opacity: 0,
          rotate: "+90",
          x: -400,
          y: -600,
        },
        { opacity: 1, x: -400, y: 0, rotate: "+90" }
      )
      .fromTo(
        ".ticket-info-3",
        {
          opacity: 0,
          rotate: "+90",
          x: -800,
          y: -600,
        },
        { opacity: 1, x: -400, y: 0, rotate: "+90" }
      );

    gsap
      .timeline({
        scrollTrigger: {
          start: "190% top",
          end: "210% top",
          scrub: 1,
          setAction: "play none none reverse",
        },
      })
      .fromTo(
        ".info-3",
        {
          opacity: 0,
          x: 800,
          y: 200,
        },
        { opacity: 1, x: 600, y: 200, ease: "back" }
      )
      .to(".ticket-info-1", { scale: 0.3, x: -380, y: 130, rotate: "+=15" })
      .fromTo(
        ".take-ticket-f",
        {
          opacity: 0,
          x: 20,
        },
        { opacity: 1, x: 60 }
      );

    gsap
      .timeline({
        scrollTrigger: {
          start: "280% top",
          end: "300% top",
          scrub: 1,
          setAction: "play restart none reverse",
        },
      })
      .fromTo(
        ".info-4",
        {
          opacity: 0,
        },
        { opacity: 1 }
      )
      .to(".ticket-info-1", { scale: 1.2, x: -700, y: 2100, rotate: "-= 60" });

    gsap
      .timeline({
        scrollTrigger: {
          start: "315% top",
          end: "317% top",
          scrub: 1,
          setAction: "play restart none reverse",
        },
      })
      .to(".ticket-info-1", { opacity: 0, x: -600, y: 2070 })
      .fromTo(
        ".box",
        { opacity: 0, x: 50, y: 0, rotate: "+=10" },
        { opacity: 1, x: 120, y: -30, rotate: "+=10" }
      )
      .fromTo(
        ".happy-girl",
        {
          x: 900,
          opacity: 0,
        },
        { opacity: 1, x: 800 }
      )
      .fromTo(".start", { opacity: 0, x: 300 }, { opacity: 1, x: 300 });
  }, []);

  return (
    <div className="info-page-container">
      <h1 className="info-page-how-it-works">How it works</h1>
      <div className="info-description" ref={el}>
        {/* <img src={jars} alt="girl holding jars" className="girl-with-jars" /> */}

        <div className="section-one" ref={el}>
          <img
            src={lighter}
            alt="boy holding lighter"
            className="boy-with-lighter"
          />
          <p className="info-1">
            Just like any other e-commerce website, sellers put what they want
            to sell on the site, write a description, and list their price.
          </p>
          <img src={dollar} alt="dollar sign" className="dollar-sign" />
        </div>

        <div className="section-two">
          <p className="info-2">
            The only difference is, sellers can split the price up into tickets!
            Each ticket is worth the total price divided by the total number of
            tickets.
          </p>
          <div className="ticket-info-group">
            <img src={ticket} alt="ticket" className="ticket-info-1" />
            <img src={ticket} alt="ticket" className="ticket-info-2" />
            <img src={ticket} alt="ticket" className="ticket-info-3" />
          </div>
        </div>

        <div className="section-three">
          <p className="info-3">
            Buyers can purchase these tickets using their points. You can buy
            one, two, or even all of the tickets. The more tickets you buy, the
            higher your chances of winning the item.
          </p>
          <img
            src={takeTicketF}
            alt="woman taking ticket"
            className="take-ticket-f"
          />
        </div>
        <div className="section-four">
          <p className="info-4" ref={el}>
            Once all the tickets are purchased, one of the tickets, chosen
            randomly, is selected and the holder of that ticket receives the
            item!
          </p>
          <img src={happy} alt="cheerful girl" className="happy-girl" />
          <img src={present} alt="gift box" className="box" />
          <NavLink to="/browse">
            <button className="start"> Let's get started! </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
