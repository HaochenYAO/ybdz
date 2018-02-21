import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  handleClick() {
    const text = this.state.inputValue.trim();
    this.props.onAddClick(text);
    this.setState({ inputValue: '' });
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={e => this.handleInputChange(e)}
        />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
