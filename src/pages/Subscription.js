import React from "react";
import "../style/Subscription.css";
import { subscriptions } from "../data/subscriptions";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const Subscription = () => {
  return (
    <div className="subscription">
      <Navigation className="sub-nav" />
      <div className="cards-wrapper">
        {subscriptions.map((subscription) => (
          <Card
            key={subscription.id}
            name={subscription.name}
            price={subscription.price}
            id={subscription.id}
            description={subscription.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Subscription;
