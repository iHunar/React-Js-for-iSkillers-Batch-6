import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Navbar</h1>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/pages/about-us")}>About</button>
    </div>
  );
};
export default Navbar;
