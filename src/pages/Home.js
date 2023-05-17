import React from "react";
import "../style/Home.css";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Offer from "../components/Offer";
import Prices from "../components/Prices";
import Footer from "../components/Footer";
import Training from "../components/Training";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Description />
      <Offer />
      <Training />
      {/* <Prices />
      <Footer/> */}
    </div>
  );
};

export default Home;
