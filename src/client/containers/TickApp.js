import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import '../css/App.css';
import Tick from '../components/tick/Tick';
import Nav from '../components/common/Nav';

@connect()
@autobind
export default class extends Component {
  static defaultProps = {
    match: {}
  }

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string
      })
    }),
  };
  // Injected by connect() call:
  render() {
    const { match: { params: { name } } } = this.props;
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
  }
}
