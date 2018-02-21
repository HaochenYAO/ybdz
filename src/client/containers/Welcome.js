import React from 'react';
import { PropTypes } from 'prop-types';
// import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import '../css/App.css';
import Tick from '../components/common/Tick';

const Welcome = props =>
  <div className="App">
    <div className="App-header">
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      Hello, {props.name}!
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Tick />
  </div>;

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect()(Welcome);
