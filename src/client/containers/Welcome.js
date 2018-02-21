import React from 'react';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import '../css/App.css'

import Tick from '../components/common/Tick';
class Welcome extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello, {this.props.name}!
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Tick />
      </div>
    );
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect()(Welcome);
