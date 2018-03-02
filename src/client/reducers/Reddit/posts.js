import { List, Map } from 'immutable';
import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../../actions/reddit/redditAction';

const stateDefault = Map({
  isFetching: false,
  didInvalidate: false,
  items: List(),
  lastUpdated: new Date(),
});

export function posts(
  state = stateDefault,
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      state = state.set('didInvalidate', true);
      return state;
    case REQUEST_POSTS:
      state = state.set('isFetching', true);
      state = state.set('didInvalidate', false);
      return state;
    case RECEIVE_POSTS:
      state = state.set('isFetching', false);
      state = state.set('didInvalidate', false);
      state = state.set('items', action.posts);
      state = state.set('lastUpdated', action.receivedAt);
      return state;
    default:
      return state;
  }
}

export function postsBySubreddit(state = Map({}), action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return state.set(action.subreddit, posts(state.get(action.subreddit), action));
    default:
      return state;
  }
}
