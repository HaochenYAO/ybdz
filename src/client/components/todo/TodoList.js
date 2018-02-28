import React from 'react';
import { PropTypes } from 'prop-types';
import Todo from './Todo';

const TodoList = (props) => {
  const { onTodoClick, todos } = props;
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
        >
          <Todo
            text={todo.text}
            completed={todo.completed}
            onClick={() => onTodoClick(todo.id)}
          />
        </li>))
      }
    </ul>);
};


export default TodoList;

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
