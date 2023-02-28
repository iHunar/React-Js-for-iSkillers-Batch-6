import React, { Component } from "react";
// const FunctionComponent = () => {
// const [name,setName] = useState("")
//   return <h1>Function Component</h1>;
// };
// class ClassComponent extends React.Component
class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "iSkillers",
      lastName: "Academy",
    };
  }
  //   var name = "Fsdfsfds"
  render() {
    console.log("name", this.state.name);
    return (
      <div>
        <h1>Class Component</h1>
        <h1>
          {this.state.name} {this.state.lastName}
        </h1>
        <button onClick={() => this.setState({ name: "iSkillers 123" })}>
          Update
        </button>
      </div>
    );
  }
}
export default ClassComponent;
