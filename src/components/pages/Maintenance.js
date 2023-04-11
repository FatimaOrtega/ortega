import React from 'react';
import AC from '../sections/InstallationPage/acinstall';
import FURNACE from '../sections/InstallationPage/furnaceinstall';
import { HashLink as Link } from "react-router-hash-link";

export const Maintenance = () => {
    return (
        <>
            THIS IS THE MAINTENANCE PAGE
            <Link to="#ac" smooth >
                Air Conditioning
            </Link>
            <Link to="#furnace" smooth >
                Furnace
            </Link>
            <AC />
            <FURNACE />
            
    </>
    )
  
};