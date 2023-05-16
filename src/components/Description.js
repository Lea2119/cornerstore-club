import React from "react";
import "../style/Description.css";

const Description = () => {
  return (
    <div className="description">
      <div className="description-wrapper">
        <div className="description-content">
          <h1>All levels welcome</h1>
          <p>
            Unleash your inner fighter and join our boxing club. Train with
            expert coaches, improve your skills, and achieve your fitness goals
            in a supportive community. Whether you're a beginner or an
            experienced boxer, our club welcomes all levels. Step into the ring
            and become a champion today.
          </p>
        </div>
        <div className="description-img">
          <img
            src={require("../assets/logan-weaver-lgnwvr-9D_rUDe7xvA-unsplash.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
