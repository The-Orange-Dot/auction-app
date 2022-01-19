import { gsap } from "gsap";

export const onEnterTicket = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    rotate: "+=3",
    duration: 0.1,
  });
};

export const onLeaveTicket = ({ currentTarget }) => {
  gsap.to(currentTarget, {
    rotate: "-=3",
    duration: 0.1,
  });
};
