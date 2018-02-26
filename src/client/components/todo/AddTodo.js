import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Input, Button } from 'antd';

export default class AddTodo extends Component {
  state = {
    inputValue: ''
  };
  handleClick = () => {
    const text = this.state.inputValue.trim();
    this.props.onAddClick(text);
    this.setState({ inputValue: '' });
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <Input
          placeholder="todos"
          value={this.state.inputValue}
          onChange={e => this.handleInputChange(e)}
        />
        <Button onClick={e => this.handleClick(e)}>
          Add
        </Button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};
