import React, { useContext } from "react";
import "../style/Navigation.css";
import { NavLink } from "react-router-dom";
import Badge from "@mui/material/Badge";
import "@mui/material/Badge/Badge";
import PersonIcon from "@mui/icons-material/Person";
import { UserContext } from "../data/UserContext";

const Navigation = () => {
  const { credits } = useContext(UserContext);

  return (
    <div className="navigation">
      <nav className="nav-container">
        <ul>
          <NavLink className="logo" to="/">
            <li>
              <p>CORNERSTORE CLUB</p>
            </li>
          </NavLink>
          <NavLink className="club" to="/studio">
            <li>
              <p>CLUB</p>
            </li>
          </NavLink>
          <NavLink to="/subscription">
            <li>
              <p>OFFERS</p>
            </li>
          </NavLink>
          <NavLink className="planning" to="/reservations">
            <li>
              <p>PLANNING</p>
            </li>
          </NavLink>
          <NavLink to="">
            <li>
              <Badge badgeContent={credits} color="primary">
                <PersonIcon
                  className="icon"
                  sx={{ color: "white", width: "30px", height: "30px" }}
                  color="white"
                />
              </Badge>
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
