import React from "react";
import "../style/Offer.css";
import OfferCard from "./OfferCard";
import ButtonOffer from "./ButtonOffer";
import { NavLink } from "react-router-dom";

const Offer = () => {
  return (
    <div className="offer">
      <h1>WELCOME OFFER</h1>
      <p className="offer-text">2 sessions to discover, unwind, disconnect.</p>
      <OfferCard />
      <NavLink to="/subscription">
        <ButtonOffer />
      </NavLink>
    </div>
  );
};

export default Offer;
