import { combineReducers } from 'redux';
import visibilityFilter from './VisibilityFilter';
import todos from './Todo';

const reducer = combineReducers({
  visibilityFilter,
  todos
})

export default reducer;
