import React, { Component } from "react";

import Counter from "./counter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      parentCounter: 10,
    };
    // console.log("Parent constructor");
  }

  mountCounter = () => this.setState({ mount: true });
  unmountCounter = () => this.setState({ mount: false });
  ignorePropHandler = () => this.setState({ ignoreProp: Math.random() });
  updateParentState = () =>
    this.setState({ parentCounter: this.state.parentCounter * 2 });

  render() {
    // console.log("Parent render");

    return (
      <div style={{ padding: "2rem" }}>
        <div>
          <button
            onClick={this.mountCounter}
            style={{ padding: ".5rem 1rem", marginBottom: "1rem" }}
            disabled={this.state.mount}
          >
            mount
          </button>
          <button
            onClick={this.unmountCounter}
            style={{ padding: ".5rem 1rem", margin: "1rem" }}
            disabled={!this.state.mount}
          >
            unmount
          </button>

          <button
            onClick={this.ignorePropHandler}
            style={{ padding: ".5rem 1rem", margin: "1rem" }}
          >
            ignore prop
          </button>

          <button
            onClick={this.updateParentState}
            style={{ padding: ".5rem 1rem", margin: "1rem" }}
          >
            update parent state
          </button>
        </div>
        <div>
          {this.state.mount ? (
            <Counter
              ignoreProp={this.state.ignoreProp}
              parentState={this.state.parentCounter}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
