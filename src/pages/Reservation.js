import React from "react";
import { reservations } from "../data/reservations";
import "../style/Reservation.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";
import Slots from "../components/Slots";

const Reservation = () => {
  return (
    <div className="reservation">
      <Navigation />
        <div className="cards-wrapper">
          {reservations.map((reservation, index) => (
            <Slots
              key={index}
              activity={reservation.activity}
              date={reservation.date}
              hours={reservation.hours}
              duration={reservation.duration}
              id={reservation.id}
              action={reservation.action}
            />
          ))}
        </div>
    </div>
  );
};

export default Reservation;
