import React from "react";
import { reservations } from "../data/reservations";
import "../style/Reservation.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const Reservation = () => {
  return (
    <div className="reservation">
      <Navigation />
      <div className="reservation-table">
        <h1>PLANNING</h1>
        <table>
          <thead>
            <tr>
              <th>activity</th>
              <th>date</th>
              <th>hours</th>
              <th>duration</th>
              <th>credit</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.activity}</td>
                <td>{reservation.date}</td>
                <td>{reservation.hours}</td>
                <td>{reservation.duration}</td>
                <td>{reservation.credit}</td>
                <td>
                  <Link className="book" to={`/book/${reservation.id}`}>
                    {reservation.action}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reservation;
