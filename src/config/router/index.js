import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs } from "./../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
