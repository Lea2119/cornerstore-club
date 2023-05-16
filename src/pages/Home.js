import React from "react";
import "../style/Home.css";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Offer from "../components/Offer";
import Prices from "../components/Prices";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Description />
      <Offer />
      <Prices />
      <Footer/>
    </div>
  );
};

export default Home;
