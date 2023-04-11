import React from "react";
import AC from "../../sections/InstallationPage/acinstall";
import FURNACE from "../../sections/InstallationPage/furnaceinstall";
import WATERHEAT from "../../sections/InstallationPage/waterheatinstall";
import DUCT from "../../sections/InstallationPage/ductinstall";
import Button from "@mui/material/Button";
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
        <div className="installProcess">The Ortega Process</div>
        <AC />
        <FURNACE />
        <WATERHEAT />
        <DUCT />
      </div>
    </>
  );
};
