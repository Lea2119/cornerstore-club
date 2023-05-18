import React from "react";
import "../style/Training.css";

const Training = () => {
  return (
    <div className="training">
      <h1>TRAINING</h1>
      <div className="training-wrapper">
        <div className="training-content">
          <div className="training-picture"></div>
          <div className="training-description">
            <h4>FRENCH BOXING</h4>
            <p>
              French boxing is a percussion combat sport that consists of two
              opponents wearing gloves and slippers, striking each other with
              their fists and feet. By practicing French boxing, you can improve
              your strength, your agility, your balance and your coordination.
              French boxing is also a great way to develop cardiovascular
              endurance.
            </p>
          </div>
        </div>
        <div className="training-content">
          <div className="training-picture two"></div>
          <div className="training-description">
            <h4>ENGLIGH BOXING</h4>
            <p>
              English boxing is a combat sport in which two opponents exchange
              punches to the face and chest. It does not include kicks, but it
              does emphasize movement and footwork. What are the advantages of
              practicing English boxing? Cardio, coordination, muscle
              strengthening, explosiveness, coordination, endurance, technique,
              self-confidence, well-being
            </p>
          </div>
        </div>
        <div className="training-content">
          <div className="training-picture three"></div>
          <div className="training-description">
            <h4>BOXING BAG</h4>
            <p>
              The boxing bag is a very complete class - cardio, muscle
              strengthening and technique. You will use your feet and your fists
              for a maximum workout. What are the benefits of boxing? Cardio,
              coordination, muscle strengthening, explosiveness, coordination,
              endurance, technique, self-confidence, well-being.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
