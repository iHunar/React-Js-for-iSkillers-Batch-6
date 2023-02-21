import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/about-us">About Us</a>
      <br />
      <Link to="/about-us">Home</Link>
      <button onClick={() => navigate("/about-us")}>Home</button>
      <br />
      <br />
      <Button title="Sign In" backgroundColor="green" onClick={()=> alert("sign in")}/>
    </div>
  );
};
export default Home;
// Login, Sign Up ,Update, Edit, Delete ,Log Out ,Vefify
