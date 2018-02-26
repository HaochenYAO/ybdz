import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Radio } from 'antd';

export default class Footer extends Component {
  state = {
    filter: this.props.filter,
  };
  handleFilterChange = (e) => {
    this.props.onFilterChange(e.target.value);
    this.setState({ filter: e.target.value });
  }
  render() {
    const { filter } = this.state.filter;
    return (
      <Radio.Group value={filter} onChange={this.handleFilterChange}>
        <Radio.Button value="SHOW_ALL">All</Radio.Button>
        <Radio.Button value="SHOW_COMPLETED">Completed</Radio.Button>
        <Radio.Button value="SHOW_ACTIVE">Active</Radio.Button>
      </Radio.Group>
    );
  }
}

Footer.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};
