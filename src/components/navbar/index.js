import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Navbar com</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about-us")}>About Us</button>
    </div>
  );
};
export default Navbar;
