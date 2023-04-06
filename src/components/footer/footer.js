import React from "react";
import "./footer.css";
import Logo from "../assets/logo.svg"

export const Footer = () => {
  return (
    <div className="main-footer">
          <div className="container">
              <div className="row">
              {/* Column1 */}
              <div className="col">
                  <h4>Copyright © 2023 A-Ortega</h4>
                  <ul className="list-unstyled">
                      <li>(773)653-3163</li>
                      <li>Chicago, IL</li>
                  </ul>
              </div>
              {/* Column2 */}
              <div className="col">
              <img src={Logo} href="/" className='logo-footer'/>
              </div>
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
   
      </div>
 
    </div>
  );
};
