import React from "react";
import "../style/Infos.css";
import Navigation from "../components/Navigation";

const Infos = () => {
  return (
    <div className="infos">
      <div className="studio">
        <Navigation />
        <h1>INFORMATIONS</h1>

        <article>
          <div className="text">
            We advise you to come 20 minutes before the beginning of your
            session. You will be welcomed by our staff for the check-in, the
            handing-over of your gloves and the indication of your spot. Do not
            hesitate to specify if it is your first boxing session, we are here
            to accompany you.
          </div>
          <div className="image">
            {/* <img
              src={require("../assets/pexels-cottonbro-studio-4753923.jpg")}
              alt=""
            /> */}
          </div>
          <div className="text">
            We provide free boxing gloves that are systematically disinfected
            and dried after each session, but the wearing of under-gloves is
            mandatory. Take light sport clothes and comfortable sneakers. Our
            studio is equipped with a water fountain to keep you hydrated.
            Forgot your water bottle? No worries, water bottles are available at
            the reception desk.
          </div>
          <div className="image">
            {" "}
            <img
              src={require("../assets/pexels-pavel-danilyuk-6296052.jpg")}
              alt=""
            />
          </div>
          <div className="text">
            Get ready to unleash your inner champion with our intense boxing
            workout. We'll start with a dynamic warm-up to get your heart
            pumping and your body primed for action. Then, we'll dive into 6
            inspiring power boxing moves that will push you to your limits. As
            you go hard on the bags and bench presses, you'll feel the burn and
            unleash your inner tiger. But don't worry, we'll make sure you cool
            down properly with a stretch and some well-deserved rest.
          </div>
          <div className="image">
            {" "}
            <img
              src={require("../assets/pexels-cottonbro-studio-4753929.jpg")}
              alt=""
            />
          </div>
        </article>
      </div>
    </div>
  );
};

export default Infos;
