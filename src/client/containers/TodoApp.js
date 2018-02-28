import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, completeTodo } from '../actions/todo/todoAction';
import { setVisibilityFilter } from '../actions/todo/filterAction';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Footer from '../components/todo/Footer';
import Nav from '../components/common/Nav';
import selector from '../selectors/todoSelector';

const TodoApp = (props) => {
  // Injected by connect() call:
  const { dispatch, visibleTodos, visibilityFilter } = props;
  return (
    <div>
      <Nav active="todo" />
      <div className="App">
        <div className="App-header">
          <span>Welcome to React</span>
        </div>
        <AddTodo
          onAddClick={
            text => dispatch(addTodo(text))
          }
        />
        <TodoList
          todos={visibleTodos}
          onTodoClick={
            id => dispatch(completeTodo(id))
          }
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={
            nextFilter => dispatch(setVisibilityFilter(nextFilter))
          }
        />
      </div>
    </div>
  );
};

TodoApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  visibleTodos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired).isRequired,
  visibilityFilter: PropTypes.oneOf([
    'SHOW_ALL',
    'SHOW_COMPLETED',
    'SHOW_ACTIVE'
  ]).isRequired
};

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(selector)(TodoApp);
