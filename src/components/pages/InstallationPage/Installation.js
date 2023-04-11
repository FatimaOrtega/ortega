import React from "react";
import AC from "../../sections/InstallationPage/acinstall";
import FURNACE from "../../sections/InstallationPage/furnaceinstall";
import WATERHEAT from "../../sections/InstallationPage/waterheatinstall";
import DUCT from "../../sections/InstallationPage/ductinstall";
import Button from "@mui/material/Button";
import "../../../App.css";
import "./Installation.css";

export const Installation = () => {
  return (
    <>
      <div className="row">
        {/* C1 */}
        <div className="installsection ">
          <Button variant="contained" href="#acinstall">
            Air Conditioning
          </Button>
          <Button variant="contained" href="#furnaceinstall">
            Furnace
          </Button>
          <Button variant="contained" href="#waterheatinstall">
            Water Heating
          </Button>
          <Button variant="contained" href="#ductinstall">
            Ducts
          </Button>
        </div>
        {/* C2 */}
        <div className="installProcess">
          {/* Title */}

          <span className="font-link titleInstall">The Ortega Process</span>

          {/* Our process */}
          
          <div className="font-linkSection processRules">
            1. Consultation: Our installation process starts with a consultation
            with our customer. We take the time to understand their specific
            needs, preferences, and budget to recommend the best unit for their
            home or business.
          </div>
          <div className="font-linkSection processRules">
            2. Assessment: We conduct a thorough assessment of
            the space where the unit will be installed. We inspect the ductwork,
            measure the square footage, and check for any potential obstacles
            that may affect the installation process.
            </div>
            <div className="font-linkSection processRules">
            3. Unit Selection: Based on
            our assessment, we recommend a unit that is best suited for the
            customer's needs. We explain the benefits and features of each unit
            to help our customers make an informed decision.
          </div>
          <div className="font-linkSection processRules">
            4. Installation: Our
            experienced technicians carefully install the unit, ensuring that
            all connections are properly installed. We take the time to ensure
              that the unit is placed in the right location and secured safely.
            </div>
            <div className="font-linkSection processRules">
            5. Testing and Inspection: Once the installation is complete, we test
            the unit to ensure that it is working correctly. We also conduct a
            final inspection to make sure that everything is working correctly
            and that the customer is satisfied with our work.
            </div>
           
        </div>
        <AC />
        <FURNACE />
        <WATERHEAT />
        <DUCT />
      </div>
    </>
  );
};
