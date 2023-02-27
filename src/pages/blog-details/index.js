import React from "react";
import { useLocation } from "react-router-dom";
const BlogDetails = () => {
  const location = useLocation();
  console.log("location", location);
  return (
    <div>
      <h1>Blog Details</h1>
      <img src={location.state.image} style={{ width: "100%" }} />
      <h1>{location.state.title}</h1>
      <h6>{location.state.date}</h6>
      <p>{location.state.des}</p>
    </div>
  );
};
export default BlogDetails;
