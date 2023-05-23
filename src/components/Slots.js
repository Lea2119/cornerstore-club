import React from "react";
import { Link } from "react-router-dom";

const Slots = ({ activity, date, hours, duration, id, className }) => {
  const styles = {
    color: "",
    buttonColor: "",
  };

  if (className === "bag") {
    styles.color = "#FF0000";
    styles.buttonColor = "#FF0000";
  } else if (className === "french") {
    styles.color = "#ff006e";
    styles.buttonColor = "#ff006e";
  } else {
    styles.color = "#0096c7";
    styles.buttonColor = "#0096c7";
  }

  return (
    <div className="slots">
      <div className="card">
        <h2 style={{ color: styles.color }}>{activity}</h2>
        <p>{date}</p>
        <p className="price">{`${hours}`}</p>
        <p className="price">{`${duration}`}</p>
        <Link to={`/book/${id}`}>
          <button style={{ backgroundColor: styles.buttonColor }}>BOOK</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Slots;
