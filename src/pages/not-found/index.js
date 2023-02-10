import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found page</h1>
      <Link to="/">Back Home</Link>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
};
export default NotFound;
