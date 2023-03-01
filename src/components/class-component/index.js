import React, { Component } from "react";
// class ClassComponent extends React.Component
import { useNavigate } from "react-router-dom";
import { AiFillAudio } from "react-icons/ai";
import { CiBatteryFull,CiAlarmOff } from "react-icons/ci";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      show: true,
    };
  }

  Update = () => {
    this.setState({ name: "123" });
  };
  render() {
    let { name, show } = this.state;
    let { navigate } = this.props;
    return (
      <div>
        <h1>Class Component</h1>
        <h1>{this.state.name}</h1>
        <h1>{name}</h1>
        {this.state.show && (
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        )}
        {show && (
          <input
            type="text"
            value={name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        )}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show
        </button>
        <button onClick={() => this.setState({ show: !show })}>Show</button>
        <button onClick={this.Update}>Update</button>
        <button onClick={() => this.props.navigate("/blog")}>Blog <CiBatteryFull /> <CiAlarmOff /></button>
        <button onClick={() => navigate("/blog")}>Blog <AiFillAudio color="green" size={150}/></button>
        
      </div>
    );
  }
}
// export default ClassComponent;
export default function () {
  const navigate = useNavigate();
  return <ClassComponent navigate={navigate} />;
}
