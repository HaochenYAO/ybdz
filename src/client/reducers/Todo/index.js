import { combineReducers } from 'redux-immutable';
import visibilityFilter from './visibilityFilter';
import todos from './todos';

const todo = combineReducers({
  visibilityFilter,
  todos
});

export default todo;
