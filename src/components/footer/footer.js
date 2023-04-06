import React from "react";
import "./footer.css";
import Logo from "../assets/logo.svg";

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img src={Logo} href="/" className="logo-footer" />
            <ul className="list-unstyled">
              
            </ul>
          </div>
          {/* Column2 */}
          <div className="col"></div>
          {/* Column3 */}
          <div className="col">
            <div className="row">
              {/* SUB COLUMN1 */}
              <div className="col">
                <h5>Quick Links:</h5>
                <ul className="list-unstyled">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              {/* SUB COLUMN2 */}
              <div className="col">
                <h5>Find us on:</h5>
                <ul className="list-unstyled">
                  <li>Facebook</li>
                  <li>Google</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} A-Ortega Heating & Cooling Inc. |
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
