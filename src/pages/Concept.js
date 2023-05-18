import React from "react";
import "../style/Concept.css";
import Navigation from "../components/Navigation";

const Studio = () => {
  return (
    <div className="studio">
      <Navigation />

      <article>
        <div className="text">
          Cornestore Club is a boxing club on a human scale whose key words are
          conviviality, sharing and effort. Indeed, we are in total opposition
          to the traditional overcrowded and impersonal gyms.
        </div>
        <div className="image">
          <img
            src={require("../assets/studio/pexels-ron-lach-8736743.jpg")}
            alt=""
          />
        </div>

        <div className="text">
          We offer classes around the world of boxing, with or without
          opposition, supervised by high level coaches. This, in small groups,
          for a personalized approach that allows everyone to evolve at their
          own pace. You want to improve your skills or simply learn about the
          world of boxing, and of course keep yourself in shape? Our certified
          coaches will help you reach your goals!
        </div>
        <div className="image">
          {" "}
          <img
            src={require("../assets/studio/pexels-koolshooters-9944594.jpg")}
            alt=""
          />
        </div>
        <div className="text">
          BOXING BAG : unopposed, during an intense cardio training session, you
          will be facing a punching bag. The boxing bag is a very complete class
          - cardio, muscle strengthening and technique. 
        </div>
        <div className="image">
          {" "}
          <img
            src={require("../assets/studio/pexels-ron-lach-8736743.jpg")}
            alt=""
          />
        </div>
      </article>
    </div>
  );
};

export default Studio;
