import React from 'react';
// import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import Nav from '../components/common/Nav';

const WelcomeApp = () => (
  <div>
    <Nav active="home" />
  </div>);

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect()(WelcomeApp);
