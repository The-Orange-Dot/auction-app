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
import Copyright from "./Copyright";

const InfoPage = () => {
  const el = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = gsap
      .timeline({ repeat: -1, yoyo: true, ease: "Power.easeOut" })
      .to(".scroll-down", {
        y: 1,
        duration: 1,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".info-page-how-it-works",
          start: "top center",
          end: "+=230",
          setAction: "play none none reverse",
          stagger: 10,
          scrub: 1,
          markers: true,
        },
      })
      .fromTo(
        ".scroll-down",
        { opacity: 1 },
        { opacity: 0, onComplete: scroll.pause() }
      )
      .fromTo(
        ".info-page-how-it-works",
        { opacity: 0 },
        {
          opacity: 1,
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
        }
      )
      .fromTo(
        ".dollar-sign",
        { opacity: 0 },
        {
          opacity: 1,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".info-2",
          start: "top center",
          end: "+=100",
          scrub: 1,
          setAction: "play none none reverse",
          markers: true,
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
      .fromTo(".dollar-sign2", { opacity: 0, y: -30 }, { opacity: 1, y: 0 })
      .fromTo(
        ".ticket-info-1",
        {
          opacity: 0,
          x: 0,
        },
        { opacity: 1, x: -400, y: 0, delay: 1 },
        1
      )
      .fromTo(
        ".ticket-info-2",
        {
          opacity: 0,
          x: -400,
        },
        { opacity: 1, x: -400, y: 0 }
      )
      .fromTo(
        ".ticket-info-3",
        { opacity: 0, x: -800 },
        { x: -400, y: 0, opacity: 1 }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".info-2",
          start: "bottom center",
          end: "+=50",
          scrub: 1,
          setAction: "play restart none reverse",
        },
      })
      .to(".ticket-info-3", { opacity: 0, delay: 0.5 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".take-ticket-f",
          start: "20% center",
          end: "+=100",
          scrub: 1,
          setAction: "play none none reverse",
        },
      })
      .fromTo(
        ".info-3",
        {
          opacity: 0,
        },
        { opacity: 1, ease: "back" }
      )
      .fromTo(
        ".take-ticket-f",
        {
          opacity: 0,
          x: 20,
        },
        { opacity: 1, x: 60 }
      )
      .fromTo(".ticket-info-4", { opacity: 0 }, { opacity: 1, y: 50 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".info-4",
          start: "top center",
          end: "+=100",
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
      .to(".ticket-info-4", {
        scale: 0.7,
        x: -70,
        yPercent: 380,
        rotate: "-= 60",
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".info-4",
          start: "center center",
          end: "+=10",
          scrub: 1,
          setAction: "play restart none reverse",
        },
      })
      .fromTo(
        ".box",
        { opacity: 0, x: 50, y: 0, rotate: "+=10" },
        { opacity: 1, x: 120, y: -30, rotate: "+=10" }
      )
      .fromTo(
        ".happy-girl",
        {
          opacity: 0,
        },
        { opacity: 1, x: -100 }
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
          <img src={dollar} alt="dollar sign" className="dollar-sign2" />
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
          <img src={ticket} alt="ticket" className="ticket-info-4" />
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
      <Copyright />
    </div>
  );
};

export default InfoPage;
