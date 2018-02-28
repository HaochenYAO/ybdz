import { createSelector } from 'reselect';
import { VisibilityFilters } from '../actions/todo/filterAction';

const todoSelector = state => state.todos;
const filterSelector = state => state.visibilityFilter;
const selectTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};


export default createSelector(
  todoSelector,
  filterSelector,
  (todos, visibilityFilter) => ({
    visibleTodos: selectTodos(todos, visibilityFilter),
    visibilityFilter
  })
);
