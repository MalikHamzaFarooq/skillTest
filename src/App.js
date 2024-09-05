import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ResponsiveDrawer from "./ResponsiveDrawer"; 

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ResponsiveDrawer>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </ResponsiveDrawer>
    </div>
  );
}

export default App;
