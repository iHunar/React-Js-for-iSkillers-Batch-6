import React, { useState } from "react";
import "./index.css";
const Home = () => {
  const [selectedButton, setSelectedButton] = useState("Vefify");
  const [selectedButton2, setSelectedButton2] = useState("Login");
  const List = [
    "Login",
    "Sign Up",
    "Update",
    "Edit",
    "Delete",
    "Log Out",
    "Vefify",
  ];

  const List2 = [
    {
      title: "Login",
    },
    {
      title: "Sign Up",
    },
    {
      title: "Update",
    },
    {
      title: "Edit",
    },
    {
      title: "Delete",
    },
    {
      title: "Log Out",
    },
    {
      title: "Vefify",
    },
  ];
  const [List3, setList3] = useState([
    {
      title: "Login",
      isSelected: false,
    },
    {
      title: "Sign Up",
      isSelected: false,
    },
    {
      title: "Update",
      isSelected: false,
    },
    {
      title: "Edit",
      isSelected: false,
    },
    {
      title: "Delete",
      isSelected: true,
    },
    {
      title: "Log Out",
      isSelected: false,
    },
    {
      title: "Vefify",
      isSelected: false,
    },
  ]);
  return (
    <div>
      <h1>Home Page</h1>

      {List.map((v, i) => {
        return (
          <button
            key={i}
            className={selectedButton === v ? "selected-button" : "button"}
            onClick={() => setSelectedButton(v)}
          >
            {v}
          </button>
        );
      })}

      <hr />
      {List2.map((v, i) => {
        return (
          <button
            key={i}
            className={
              selectedButton2 === v.title ? "selected-button" : "button"
            }
            onClick={() => setSelectedButton2(v.title)}
          >
            {v.title}
          </button>
        );
      })}

      <hr />
      {List3.map((v, i) => {
        return (
          <button
            key={i}
            className={v.isSelected ? "selected-button" : "button"}
            onClick={() => {
              // v.isSelected !== v.isSelected;
              // setList3(v.isSelected);
              List3[i].isSelected = !List3[i].isSelected;
              setList3([...List3]);
            }}
          >
            {v.isSelected && (
              <img
                src="https://www.freeiconspng.com/thumbs/check-tick-icon/tick-icon-30.png"
                height={10}
              />
            )}
            {v.title}
          </button>
        );
      })}
    </div>
  );
};
export default Home;
// Login, Sign Up ,Update, Edit, Delete ,Log Out ,Vefify
