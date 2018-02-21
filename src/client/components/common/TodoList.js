import React from 'react';
import { PropTypes } from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { onTodoClick, todos } = props;
  return (
    <ul>
      {todos.map((todo, index) =>
        <Todo
          {...todo}
          key={index}
          onClick={() => onTodoClick(index)}
        />
      )}
    </ul>);
};


export default TodoList;

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
