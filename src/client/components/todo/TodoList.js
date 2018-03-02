import React from 'react';
import { PropTypes } from 'prop-types';
import { List } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Todo from './Todo';

const TodoList = (props) => {
  const { onTodoClick, todos } = props;
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.get('id')}
        >
          <Todo
            text={todo.get('text')}
            completed={todo.get('completed')}
            onClick={() => onTodoClick(todo.get('id'))}
          />
        </li>))
      }
    </ul>);
};

export default TodoList;

TodoList.propTypes = {
  onTodoClick: PropTypes.func.isRequired,
  todos: ImmutablePropTypes.listOf(ImmutablePropTypes.mapContains({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired
};
