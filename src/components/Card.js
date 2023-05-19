import React from "react";
import "../style/Card.css";
import { Link } from "react-router-dom";

const Card = ({ name, price, description, id }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">{`${price}.00 £`}</p>
      <Link to={`/proceed/${id}`}>
        <button>ADD TO BASKET</button>
      </Link>
    </div>
  );
};

export default Card;
