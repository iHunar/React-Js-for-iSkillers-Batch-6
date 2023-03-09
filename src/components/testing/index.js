import React from "react";
class Testing extends React.Component {
  componentWillUnmount() {
    alert("disable")
  }
  render() {
    return (
      <div>
        <h1>Testing Component</h1>
      </div>
    );
  }
}
export default Testing;
