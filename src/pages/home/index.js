import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Input,
  Card,
  Header,
  ClassComponent,
  SearchAppBar,
} from "../../components";
import firebase from "../../config/firebase";
const Home = () => {
  const navigate = useNavigate();
  const auth = getAuth();

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

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, "abc@gmail.com", "password")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <SearchAppBar />
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
      {/* <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /> */}
      {/* <Input
        type=""
        placeholder="user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <select onChange={(e) => setType(e.target.value)}>
        <option value="">Select</option> */}
      {/* <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option> */}
      {/* {List.map((v, i) => {
          return (
            <option value={v.value} key={i}>
              {v.value}
            </option>
          );
        })}
      </select>
      <Button title="Submit" onClick={SubmitHandler} />
      {List.map((v, i) => {
        return <Card heading={v.value} data={List} />;
      })}

      <Header>
        <p>fsdfsfsfdsds</p>
        <h1>fdsfdsf</h1>
        <img src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/fivePoints.png?alt=media&token=33ddfcb1-14d4-42b3-9b8c-983c7e0cebad" height={"150px"}/>
      </Header> */}
      <button onClick={SignUp}>Sign Up</button>
      <button onClick={() => navigate("blog")}>Blog</button>

      <ClassComponent />
    </div>
  );
};
export default Home;
// Login, Sign Up ,Update, Edit, Delete ,Log Out ,Vefify
