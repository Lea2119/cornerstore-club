import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { reservations } from "../data/reservations";
import Navigation from "../components/Navigation";
import { UserContext } from "../data/UserContext";
import "../style/Booking.css";

const Booking = () => {
  const { id } = useParams();
  const reservation = reservations.find((r) => r.id === id);
  const { credits, setCredits } = useContext(UserContext);

  // Function to handle the booking
  const handleBook = () => {
    if (credits >= reservation.credit) {
      setCredits(credits - reservation.credit);
      // show confirmation popup
      alert("Your order has been confirmed!");
    } else {
      // show error message
      alert("You don't have enough credits to place this order.");
    }
  };

  return (
    <div className="booking">
      <Navigation />
      {reservation && (
        <div>
          <h1>You're Booking</h1>
          <p>{reservation.activity}</p>
          <p>{reservation.date}</p>
          <p>{reservation.hours}</p>
        </div>
      )}
      <p>You have {credits} credits.</p>
      {credits >= reservation.credit ? (
        <div className="options">
          <button className="book" onClick={handleBook}>
            BOOK
          </button>
        </div>
      ) : (
        <p className="credit-warning">
          You don't have enough credits to book this activity.
        </p>
      )}
      <div>
        <div className="options">
          <Link to="/reservations">
            <button>GO BACK TO PLANNING</button>
          </Link>
          <Link to="/subscription">
            <button>GO TO OFFERS</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Booking;
