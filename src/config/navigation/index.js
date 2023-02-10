import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs, NotFound } from "./../../pages";
const ReactNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default ReactNavigation;
