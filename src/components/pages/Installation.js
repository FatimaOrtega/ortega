import React from 'react';
import AC from '../sections/InstallationPage/ac';
import FURNACE from '../sections/InstallationPage/furnace';
import { HashLink as Link } from "react-router-hash-link";

export const Installation = () => {
    return (
        <>
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