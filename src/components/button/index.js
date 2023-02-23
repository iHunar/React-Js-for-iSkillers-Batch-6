import React from "react";
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: props.backgroundColor,
      }}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
};
export default Button;
