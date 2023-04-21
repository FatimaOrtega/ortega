import React from "react";
import "./ductinstall.css";

const duct = () => {
  return (
    <>
      <section id="ductinstall">
        <div className="ductSection">
          <div className="ductinstallInfo">
            {/* Title */}

            <div className="font-link titleInstall">Ducts</div>

            <div className="font-linkSection ductInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we offer professional duct
              installation services to our customers. Our experienced
              technicians follow a step-by-step process to ensure that every
              installation is done efficiently and effectively.
            </div>
            <div className="font-linkSection ductInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we are committed to providing
              our customers with the highest quality duct installation services.
              We stand behind our work and are committed to ensuring that every
              installation is done to the highest standards. Contact us today to
              learn more about our services and how we can help you maintain a
              comfortable indoor environment.
            </div>

            <a href="/contactUs">
             
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default duct;
