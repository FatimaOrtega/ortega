import React from "react";
import { NavigationBar } from "./components/navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Installation } from "./components/pages/InstallationPage/Installation";
import { Maintenance } from "./components/pages/Maintenance";
import { AboutUs } from "./components/pages/AboutUs";
import { ContactUs } from "./components/pages/ContactUs";
import { Footer } from "./components/footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="page-container">
      <div className="content-wrap">
       <Router>
      <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes>
          </Router>
          </div>
      
      <Footer />
      </div>
    </>
  );
};

export default App;
