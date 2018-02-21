import React from 'react';
import { PropTypes } from 'prop-types';

const Todo = props =>
  <li>
    <button
      onClick={props.onClick}
      style={{
        textDecoration: props.completed ? 'line-through' : 'none',
        cursor: props.completed ? 'default' : 'pointer'
      }}
    >
      {props.text}
    </button>
  </li>;

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
export default Todo;
