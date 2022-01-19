import React from "react";
import "./InfoPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import jars from "../../database/images/jars.png";
import lighter from "../../database/images/lighter.png";
import dollar from "../../database/images/dollar-sign.png";
import ticket from "../../database/images/Ticket.png";

const InfoPage = () => {
  const el = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".info-page-how-it-works", {
      scrollTrigger: {
        trigger: ".info-page-how-it-works",
        pin: true,
        start: "top 40%",
        end: "top 30%",
        toggleActions: "play play play reverse",
        markers: true,
      },
      opacity: 0,
    });

    gsap.from(".info-1", {
      scrollTrigger: {
        trigger: ".info-1",
        start: "top 20%",
        end: "top -200%",
        pin: true,
        toggleActions: "play play play reverse",
      },
      x: -800,
    });

    gsap.from(".info-2", {
      scrollTrigger: {
        trigger: ".info-2",
        start: "top 35%",
        end: "top -200%",
        pin: true,
        toggleActions: "play play play reverse",
      },
      x: -800,
    });

    gsap.to(".boy-with-lighter", {
      scrollTrigger: {
        trigger: ".boy-with-lighter",
        start: "top 20%",
        end: "top -500%",
        pin: true,
        toggleActions: "play play play reverse",
      },
      opacity: 1,
      x: -100,
    });

    gsap.to(".dollar-sign", {
      scrollTrigger: {
        trigger: ".dollar-sign",
        start: "top 43%",
        end: "top -30%",
        pin: true,
        toggleActions: "play play play reverse",
      },
      opacity: 1,
      y: -100,
    });
  }, []);

  return (
    <div className="info-page-container">
      <h1 className="info-page-how-it-works">How it works</h1>
      <div className="info-description" ref={el}>
        {/* <img src={jars} alt="girl holding jars" className="girl-with-jars" /> */}
        <img
          src={lighter}
          alt="boy holding lighter"
          className="boy-with-lighter"
        />
        <img src={dollar} alt="dollar sign" className="dollar-sign" />
        <p className="info-1">
          Vendors put items on the site and list their price just like any other
          e-commerce website.
        </p>
        <p className="info-2">
          The only difference is, vendors can split the price up into tickets!
        </p>
        {/* <p className="info-2" ref={el}>
          Buyers can purchase these tickets using their points. You can buy one,
          two, or even all of the tickets. The more tickets you buy, the higher
          your chances of winning the item.
        </p>
        <p className="info-3" ref={el}>
          Once all the tickets are purchased, one of the tickets, chosen
          randomly, is selected and the holder of that ticket receives the item!
        </p> */}
      </div>
    </div>
  );
};

export default InfoPage;
