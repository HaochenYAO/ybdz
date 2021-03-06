import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
class Tick extends Component {
  state = {
    timeNow: new Date().toLocaleTimeString()
  };
  componentDidMount() {
    const intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.state.intervalId = intervalId;
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  timer() {
    // setState method is used to update the state
    this.setState({ timeNow: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.timeNow}.</h2>
      </div>
    );
  }
}
export default Tick;
