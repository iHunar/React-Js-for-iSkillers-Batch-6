import React from "react";
const Card = (props) => {
    console.log("props",props)
  return (
    <div style={{ border: "1px solid red" }}>
      <h1>{props.heading}</h1>
      <select>
        {
            // map
            <option></option>
        }
      </select>
    </div>
  );
};
export default Card;
