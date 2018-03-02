import { combineReducers } from 'redux-immutable';
import { posts, postsBySubreddit } from './posts';
import selectedSubreddit from './selectedSubreddit';

const reddit = combineReducers({
  posts,
  postsBySubreddit,
  selectedSubreddit
});

export default reddit;
