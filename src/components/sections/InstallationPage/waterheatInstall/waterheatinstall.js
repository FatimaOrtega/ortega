import React from "react";
import "./waterheatinstall.css";

const waterheat = () => {
  return (
    <>
      <section id="waterheatinstall">
        <div className="waterheatSection">
          <div className="acinstallInfo">
            {/* Title */}

            <div className="font-link titleInstall">Water Heating</div>

            <div className="font-linkSection acInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we specialize in providing
              efficient and reliable water heater installation services to our
              customers. Our experienced technicians follow a step-by-step
              process to ensure that every installation is done right the first
              time.
            </div>
            <div className="font-linkSection acInstallparagraph">
              At A-Ortega Heating & Cooling Inc., we are committed to providing
              our customers with high-quality water heater installation services
              that meet their specific needs. Our team of experienced
              technicians is dedicated to ensuring that every installation is
              done right the first time. We stand behind our work and are
              committed to ensuring that every customer is satisfied with our
              services. Contact us today to learn more about our water heater
              installation services!
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

export default waterheat;
