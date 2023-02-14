import React, { useState } from "react";
import "./index.css";
const Home = () => {
  const [formType, setFormType] = useState("Physical");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const SignUp = () => {
    if (fullName === "") {
      setMessage("full name");
      setMessageType("error");
    } else {
      setMessage("full name .......");
      setMessageType("success");
      const userData = {
        fullName:fullName,
        formType:formType
      }
      console.log("userData",userData);
      setFullName("")
    }
  };
  return (
    <div>
      <button
        className={formType === "Physical" ? "selected-button" : "button"}
        onClick={() => setFormType("Physical")}
      >
        Physical
      </button>
      <button
        className={formType === "Online" ? "selected-button" : "button"}
        onClick={() => setFormType("Online")}
      >
        Online
      </button>
      <p>Apply form here for {formType} classes.</p>
      <input
        type="text"
        placeholder="full name"
        value={fullName}
        onChange={(fullName) => setFullName(fullName.target.value)}
      />
      <p style={{ color: messageType === "error" ? "red" : "green" }}>
        {message}
      </p>
      <button onClick={SignUp}>submit</button>
    </div>
  );
};
export default Home;







// Login, Sign Up ,Update, Edit, Delete ,Log Out ,Vefify 
