import React, { useContext } from "react";
import Navigation from "../components/Navigation";
import "../style/Proceed.css";
import { Link, useParams } from "react-router-dom";
import { subscriptions as subData } from "../data/subscriptions";
import { UserContext } from "../data/UserContext";

const Proceed = () => {
  const { id } = useParams();
  const subscription = subData.find((r) => r.id === id);
  const { setCredits } = useContext(UserContext);
  const { credits } = useContext(UserContext);

  const handleConfirmOrder = () => {
    // Update the number of credits
    setCredits((prevCredits) => prevCredits + subscription.credits);

    // Show the confirmation popup
    alert("Your order has been confirmed!");
  };

  return (
    <div className="proceed">
      <Navigation />
      {subscription && (
        <div className="proceed-content">
          <h1>PROCEED PAYEMENT FOR : {subscription.name}</h1>
          <h2>{`${subscription.price}.00 $`}</h2>
          <p>{subscription.description}</p>
          <div className="btn-wrapper">
            <button onClick={handleConfirmOrder}>PROCEED TO PAIEMENT</button>
            <Link to="/subscription">
              <button>GO BACK TO OFFERS</button>
            </Link>
          </div>
          <p>You have {credits} credits.</p>
        </div>
      )}
    </div>
  );
};

export default Proceed;
