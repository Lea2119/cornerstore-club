import React from "react";
import "../style/Hero.css";
import Button from "./Button";
import ButtonDiscover from "./ButtonDiscover";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="hero">
      <img className="video" src={require("../assets/hero.jpg")} alt="" />

      {/* <p className="title">- CORNERSTORE CLUB -</p> */}
      <Navigation className="hero-navigation" />
      <p className="hero-text">BOXING CLUB OPEN SINCE 2015</p>
      <div className="buttons-wrapper">
        <NavLink className="navlink" to="/reservations">
          <Button />
        </NavLink>
        <NavLink to="/studio">
          <ButtonDiscover />
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
