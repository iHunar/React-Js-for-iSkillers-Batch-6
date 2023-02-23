import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";
const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [type, setType] = useState("");
  console.log("type >>>>", type);
  const SubmitHandler = () => {
    console.log("email >>> ", email);
    console.log("userName >>> ", userName);
  };
  const List = [
    {
      value: "A",
    },
    {
      value: "B",
    },
    {
      value: "A",
    },
  ];
  return (
    <div>
      <h1>Home Page</h1>
      {/* <a href="/about-us">About Us</a>
      <br />
      <Link to="/about-us">Home</Link>
      <button onClick={() => navigate("/about-us")}>Home</button>
      <br />
      <br />
      <Button title="Sign In" backgroundColor="green" onClick={()=> alert("sign in")}/> */}
      {/* <h1>{name}</h1> */}
      {/* <input
        type="text"
        placeholder="type ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={SubmitHandler}>Submit</button> */}
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type=""
        placeholder="user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">Select</option>
        {/* <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option> */}
        {List.map((v, i) => {
          return (
            <option value={v.value} key={i}>
              {v.value}
            </option>
          );
        })}
      </select>
      <Button title="Submit" onClick={SubmitHandler} />
    </div>
  );
};
export default Home;
// Login, Sign Up ,Update, Edit, Delete ,Log Out ,Vefify
