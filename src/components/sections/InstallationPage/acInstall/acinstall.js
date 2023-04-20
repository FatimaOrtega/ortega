import React from "react";
import "./acinstall.css";

const ac = () => {
  return (
    <>
      <section id="acinstall">
        <div className="acSection">
          <div className="acinstallInfo">
            {/* Title */}

            <div className="font-link titleInstall">Air Conditioning</div>

            <div className="font-linkSection acInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we are committed to providing
              the highest quality air conditioning installation services to our
              customers. Our experienced technicians follow a comprehensive
              process to ensure that every installation is done right the first
              time.
            </div>
            <div className="font-linkSection acInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we are dedicated to providing
              our customers with the highest quality air conditioning
              installation services. We stand behind our work and are committed
              to ensuring that every installation is done to the highest
              standards. Contact us today to learn more about our services and
              how we can help you stay cool and comfortable all year long!
            </div>

            <a href="/contactUs">
              {" "}
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ac;
