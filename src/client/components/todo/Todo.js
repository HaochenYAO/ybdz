import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from 'antd';

const Todo = props => (
  <Button
    onClick={props.onClick}
    style={{
      textDecoration: props.completed ? 'line-through' : 'none',
      cursor: props.completed ? 'default' : 'pointer'
    }}
  >
    {props.text}
  </Button>);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
export default Todo;
