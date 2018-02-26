import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
// import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import '../css/App.css';
import Tick from '../components/tick/Tick';
import Nav from '../components/common/Nav';

const TickApp = (props) => {
  // Injected by connect() call:
  const { match: { params: { name } } } = props;
  return (
    <div>
      <Nav active="tick" />
      <div className="App">
        <div className="App-header">
          <span>Welcome to React</span>
        </div>
        <p className="App-intro">
          Hello, {name}!
          To get started, edit <code>src/App.js</code> and save to reload.
          <Link to="/todo">
            <span>Todos</span>
          </Link>
        </p>
        <Tick />
      </div>
    </div>
  );
};


TickApp.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string
    }).isRequired
  }).isRequired,
};
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect()(TickApp);
