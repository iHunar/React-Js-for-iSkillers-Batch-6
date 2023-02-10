import React, { useState } from "react";
import { Navbar, Button } from "../../components";
const Home = () => {
  const [userName, setUserName] = useState("");
  const UpdateData = () => {
    // setUserName("iSkillers 123");
    console.log(userName)
  };
  return (
    <div>
      <h1>Home page </h1>
      {/* <h1>{userName}</h1> */}
      <input type="text" placeholder="Type ...." value={userName} onChange={(e)=> setUserName(e.target.value)}/>
      <button onClick={UpdateData}>add</button>
      {/*  <button onClick={()=> setUserName("45645545")}>add</button>
      <button onClick={()=> UpdateData(564665)}>add</button> */}
      <Navbar />
      <Button />
    </div>
  );
};
export default Home;
