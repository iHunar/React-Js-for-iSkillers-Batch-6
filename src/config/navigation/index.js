import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home ,AboutUs,Blog,BlogDetails,BlogDetails2} from "../../pages";
const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog-details" element={<BlogDetails />}/>
        <Route path="/blog-details-2/:id" element={<BlogDetails2 />}/>
      </Routes>
    </BrowserRouter>
  );
};
export default RouterNavigation;
