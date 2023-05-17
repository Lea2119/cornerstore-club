import React from "react";
import "../style/OfferCard.css";

const OfferCard = () => {
  return (
    <div className="offer-card">
      <div className="offer-card-content">
        <p className="new-price">29$</p>
        <p className="old-price">
          <s>instead of 40$</s>
        </p>
      </div>
      {/* <p className="sessions">2 sessions</p> */}
    </div>
  );
};

export default OfferCard;
