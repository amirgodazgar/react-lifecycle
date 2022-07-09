import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      counter: 0,
      parentState: 0,
    };
  }

  increment = () => this.setState({ counter: this.state.counter + 1 });

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    if (props.parentState !== state.parentState) {
      return {
        counter: props.parentState,
        parentState: props.parentState,
      };
    } else return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("-----------------");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("should render");
      return false;
    } else {
      console.log("should Not render");
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("-----------------");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("-----------------");
  }

  getSnapshotBeforeUpdate () {
    
  }

  render() {
    console.log("render");
    return (
      <div style={{ padding: "2rem" }}>
        <button
          onClick={this.increment}
          style={{ padding: ".5rem 1rem", marginBottom: "1rem" }}
        >
          +
        </button>
        <div>Counter {this.state.counter}</div>
      </div>
    );
  }
}
