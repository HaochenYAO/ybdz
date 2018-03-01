import React, { Component } from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import Nav from '../components/common/Nav';

@connect()
@autobind
export default class extends Component {
  render() {
    return (
      <div>
        <Nav active="home" />
      </div>);
  }
}
