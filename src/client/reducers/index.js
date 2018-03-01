import { combineReducers } from 'redux';
import visibilityFilter from './Todo/visibilityFilter';
import todos from './Todo/todo';
import error from './error';
import { posts, postsBySubreddit } from './Reddit/posts';
import selectedSubreddit from './Reddit/selectedSubreddit';

const reducer = combineReducers({
  visibilityFilter,
  todos,
  posts,
  postsBySubreddit,
  selectedSubreddit,
  error
});

export default reducer;
