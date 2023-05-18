import React from "react";
import "../style/Prices.css";
import { NavLink } from "react-router-dom";
import ButtonOffer from "./ButtonOffer";

const Prices = () => {
  return (
    <div className="prices">
      <table>
        <thead>
          <tr>
            <th>session pack</th>
            <th>price</th>
            <th>validity period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="highlighted">1</span> credit
            </td>
            <td>20$</td>
            <td>15 days</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">5</span> credit
            </td>
            <td>90$</td>
            <td>45 days</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">10</span> credit
            </td>
            <td>160$</td>
            <td>4 months</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">20</span> credit
            </td>
            <td>270$</td>
            <td>6 months</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">50</span> credit
            </td>
            <td>600$</td>
            <td>12 months</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">100</span> credit
            </td>
            <td>1025$</td>
            <td>15 months</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">150</span> credit
            </td>
            <td>1300$</td>
            <td>18 months</td>
          </tr>
          <tr>
            <td>
              <span className="highlighted">200</span> credit
            </td>
            <td>1500$</td>
            <td>21 months</td>
          </tr>
        </tbody>
      </table>
      {/* <NavLink to="/subscription">
      <ButtonOffer />
      </NavLink> */}
    </div>
  );
};

export default Prices;
