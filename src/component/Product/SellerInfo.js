import React, { useEffect, useState } from "react";
import gsap from "gsap";

const SellerInfo = ({ seller, isBig }) => {
  const [tween, setTween] = useState();

  useEffect(() => {
    const tween = gsap
      .timeline({ paused: true })
      .fromTo(
        ".seller-info-container",
        { opacity: 0, display: "none" },
        { opacity: 1, display: "flex" }
      );

    setTween(tween);
  }, []);

  // if (isBig) {
  //   tween.play(0);
  // }

  return (
    <div className="seller-info-container">
      <img
        src={seller.picture}
        alt="seller"
        className="seller-profile-picture"
      />
      <p>{seller.username}</p>
      <p>Seller Rating:</p>
      <p>{seller.seller_rating}</p>
      {seller.verified ? <p>Verified Seller</p> : null}
    </div>
  );
};

export default SellerInfo;
