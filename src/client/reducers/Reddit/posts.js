import { Map } from 'immutable';
import {
  INVALIDATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS
} from '../../actions/reddit/redditAction';

const stateDefault = Map({
  isFetching: false,
  didInvalidate: false,
  items: []
});

export function posts(
  state = stateDefault,
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      state.set('didInvalidate', true);
      state.set('lastUpdated', state.lastUpdated);
      return state;
    case REQUEST_POSTS:
      state.set('isFetching', true);
      state.set('didInvalidate', false);
      state.set('lastUpdated', state.lastUpdated);
      return state;
    case RECEIVE_POSTS:
      state.set('isFetching', false);
      state.set('didInvalidate', false);
      state.set('items', action.posts);
      state.set('lastUpdated', action.receivedAt);
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
