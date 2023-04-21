import React from "react";
import "./furnaceinstall.css";

const furnace = () => {
  return (
    <>
      <section id="furnaceinstall">
        <div className="furnaceSection">
          <div className="furnaceinstallInfo">
            {/* Title */}

            <div className="font-link titleInstall">Furnace</div>

            <div className="font-linkSection furnaceInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we take pride in our
              comprehensive furnace installation services. Our experienced
              technicians follow a meticulous process to ensure that every
              installation is done efficiently and effectively.
            </div>
            <div className="font-linkSection furnaceInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we are dedicated to providing
              our customers with the highest quality furnace installation
              services. We stand behind our work and are committed to ensuring
              that every installation is done to the highest standards. Contact
              us today to learn more about our services and how we can help you
              stay warm and comfortable all winter long!
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

export default furnace;
