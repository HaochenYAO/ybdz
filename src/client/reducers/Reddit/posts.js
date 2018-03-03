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
      return state.set('didInvalidate', true);
    case REQUEST_POSTS:
      return state.set('didInvalidate', false).set('isFetching', true);
    case RECEIVE_POSTS:
      return state.set('isFetching', false)
        .set('didInvalidate', false)
        .set('items', action.posts)
        .set('lastUpdated', action.receivedAt);
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
