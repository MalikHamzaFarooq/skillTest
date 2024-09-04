import React from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import AboutUs from "./AboutUs";
import Services from "./Services";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} key={location.pathname}>
       
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services/>
            </Layout>
          }
        />
       
       
      </Routes>
    </div>
  );
}

export default App;