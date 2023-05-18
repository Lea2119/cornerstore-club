import React from "react";
import "../style/Concept.css";
import Navigation from "../components/Navigation";

const Studio = () => {
  return (
    <div className="studio">
      <Navigation />
      <h1>THE STUDIO</h1>

      <article>
        <div className="text">
          Cornestore Club is a boxing club on a human scale whose key words are
          conviviality, sharing and effort. Indeed, we are in total opposition
          to the traditional overcrowded and impersonal gyms.
        </div>
        <div className="image">
          {/* <img
            src={require("../assets/studio/pexels-cottonbro-studio-4754142.jpg")}
            alt=""
          /> */}
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
          - cardio, muscle strengthening and technique. You will use your feet
          and your fists for a maximum workout. What are the benefits of boxing?
          Cardio, coordination, muscle strengthening, explosiveness,
          coordination, endurance, technique, self-confidence, well-being.
        </div>
        <div className="image">
          {" "}
          {/* <img
            src={require("../assets/studio/pexels-ron-lach-8736743.jpg")}
            alt=""
          /> */}
        </div>
        <div className="text">
          FRENCH BOXING : French boxing is a percussion combat sport that
          consists of two opponents wearing gloves and slippers, striking each
          other with their fists and feet. By practicing French boxing, you can
          improve your strength, your agility, your balance and your
          coordination. French boxing is also a great way to develop
          cardiovascular endurance.
        </div>
        <div className="image">
          {" "}
          {/* <img
            src={require("../assets/studio/pexels-cottonbro-studio-4754143.jpg")}
            alt=""
          /> */}
        </div>
        <div className="image">
          {" "}
          <img
            src={require("../assets/studio/pexels-cottonbro-studio-4761663.jpg")}
            alt=""
          />
        </div>
        <div className="text">
          ENGLISH BOXING : English boxing, also known as the noble art, is a
          combat sport in which two opponents exchange punches to the face and
          chest. It does not include kicks, but it does emphasize movement and
          footwork. What are the advantages of practicing English boxing?
          Cardio, coordination, muscle strengthening, explosiveness,
          coordination, endurance, technique, self-confidence, well-being
        </div>
        <div className="text">
          PERSONAL COACH : Get personalized attention and one-on-one coaching
          with our personal coach boxing sessions. Our experienced boxing
          coaches will work with you to develop a customized training plan that
          meets your individual needs and goals. During each session, your coach
          will guide you through a variety of boxing techniques and drills,
          including footwork, punching, defensive moves, and conditioning
          exercises. You'll learn proper form and technique, while building
          strength, endurance, and confidence.
        </div>
        <div className="image">
          {" "}
          {/* <img
            src={require("../assets/studio/pexels-cottonbro-studio-4753985 (1).jpg")}
            alt=""
          /> */}
        </div>
      </article>
    </div>
  );
};

export default Studio;
