import React from "react";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "red",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: this.props.color });
    }, 2000);
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.color };
  // }
  shouldComponentUpdate() {
    return false;
  }
  UpdateColor = () => {
    this.setState({ color: "green" });
  };
  render() {
    let { color } = this.state;
    return (
      <div>
        <h1 style={{ color: color }}>Class Component</h1>
        <button onClick={this.UpdateColor}>Update Color</button>
      </div>
    );
  }
}
export default ClassComponent;
