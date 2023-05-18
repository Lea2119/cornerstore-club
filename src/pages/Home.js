import React from "react";
import "../style/Home.css";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Offer from "../components/Offer";
import Prices from "../components/Prices";
import Footer from "../components/Footer";
import Training from "../components/Training";
import Navigation from "../components/Navigation";
import Faq from "../components/Faq";
import Map from "../components/Map";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Description />
      <Offer />
      <Training />
      <Map />
      {/* <Faq/> */}
      {/* <Prices /> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
