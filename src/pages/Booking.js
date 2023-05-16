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
        <h1>
          You're Booking : {reservation.activity} on {reservation.date} at{" "}
          {reservation.hours}
        </h1>
      )}
      <p>You have {credits} credits.</p>
      {credits >= reservation.credit ? (
        <button onClick={handleBook}>BOOK</button>
      ) : (
        <p>You don't have enough credits to book this activity.</p>
      )}
      <div className="options">
        <Link to="/reservations">
          <button>GO BACK TO PLANNING</button>
        </Link>
        <Link to="/subscription">
          <button>GO TO OFFERS</button>
        </Link>
      </div>
    </div>
  );
};

export default Booking;
