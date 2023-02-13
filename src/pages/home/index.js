import React, { useState } from "react";
const Home = () => {
  const [showHeading, setShowHeading] = useState();
//   if()
  return (
    <div>
      {/* {showHeading &&} */}
      {/* {showHeading ?} */}
      {showHeading && <h1>Home Page</h1>}
      <button style={{backgroundColor:showHeading? "red":"blue",color:!showHeading && "white"}} onClick={() => setShowHeading(!showHeading)}>
        {showHeading ? "Hide" : "Show"}
      </button>

      {/* {showHeading ? (
        <button onClick={() => setShowHeading(false)}>Hide</button>
      ) : (
        <button onClick={() => setShowHeading(true)}>Show</button>
      )} */}
    </div>
  );
};
export default Home;
