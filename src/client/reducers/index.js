import { combineReducers } from 'redux-immutable';
import todo from './Todo';
import reddit from './Reddit';
import error from './error';

const reducer = combineReducers({
  todo,
  reddit,
  error
});

export default reducer;
