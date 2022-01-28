import gsap from "gsap";
import React, { useEffect } from "react";

const SellBackgroundTween = ({ children }) => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        ".sell-background",
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, ease: "Power4.easeout", duration: 0.7 }
      )
      .fromTo(".sell-form-container", { opacity: 0 }, { opacity: 1 });
  }, []);

  return <div>{children}</div>;
};

export default SellBackgroundTween;
