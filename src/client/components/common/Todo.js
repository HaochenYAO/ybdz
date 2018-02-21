import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

const Todo = (onClick, completed, text) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        cursor: completed ? 'default' : 'pointer'
      }}
    >
      {text}
    </li>);
}

export default Todo;

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
};
