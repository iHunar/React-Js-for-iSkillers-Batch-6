import React from "react";
const Header = (props) => {
  console.log("header props >>>> , ", props);
  return <div>{props.children}</div>;
};
export default Header;
