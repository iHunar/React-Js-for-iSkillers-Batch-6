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
      // this.setState({ color: this.props.color });
    }, 2000);
  }
  // static getDerivedStateFromProps(props, state) {
  //   return { color: props.color };
  // }
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById(
      "div1"
    ).innerHTML = `Before update ${prevState.color}`;
  }

  componentDidUpdate(){
    document.getElementById(
      "div2"
    ).innerHTML = `After update ${this.state.color}`;
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
        <button onClick={() => this.setState({ color: "gray" })}>
          Update Color
        </button>
        <button onClick={() => this.setState({ color: "yellow" })}>
          Update Color
        </button>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
export default ClassComponent;
