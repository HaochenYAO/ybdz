import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { addTodo, completeTodo } from '../actions/todo/todoAction';
import { setVisibilityFilter } from '../actions/todo/filterAction';
import AddTodo from '../components/todo/AddTodo';
import TodoList from '../components/todo/TodoList';
import Footer from '../components/todo/Footer';
import Nav from '../components/common/Nav';
import selector from '../selectors/todoSelector';

@connect(selector)
@autobind
export default class extends Component {
  static defaultProps = {
    dispatch: () => {},
    visibleTodos: [],
    visibilityFilter: 'SHOW_ALL'
  }
  static propTypes = {
    dispatch: PropTypes.func,
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      completed: PropTypes.bool
    }).isRequired),
    visibilityFilter: PropTypes.oneOf([
      'SHOW_ALL',
      'SHOW_COMPLETED',
      'SHOW_ACTIVE'
    ])
  };

  render() {
    // Injected by connect() call:
    const { dispatch, visibleTodos, visibilityFilter } = this.props;
    return (
      <div>
        <Nav active="todo" />
        <div className="App">
          <div className="App-header">
            <span>Welcome to React</span>
          </div>
          <AddTodo
            onAddClick={
              text => dispatch(addTodo(text, (e) => {
                console.log(e);
              }))
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
  }
}
