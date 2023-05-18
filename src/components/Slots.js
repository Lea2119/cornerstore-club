import React from "react";
import { Link } from "react-router-dom";

const Slots = ({ activity, date, hours, duration, id, action }) => {
  return (
    <div className="slots">
      <div className="card">
        <h2>{activity}</h2>
        <p>{date}</p>
        <p className="price">{`${hours}`}</p>
        <p className="price">{`${duration}`}</p>
        <Link to={`/book/${id}`}>
          <button>BOOK</button>
        </Link>
      </div>
    </div>
  );
};

export default Slots;
