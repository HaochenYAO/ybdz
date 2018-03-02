import { createSelector } from 'reselect';
import { Map, List } from 'immutable';

const selectedSubredditSelector = state => state.get('reddit').get('selectedSubreddit');
const postsBySubredditSelector = state => state.get('reddit').get('postsBySubreddit');
const selectPosts = (selectedSubreddit, postsBySubreddit) => {
  const post = postsBySubreddit.get(selectedSubreddit) || Map({
    isFetching: true,
    didInvalidate: false,
    items: List(),
    lastUpdated: new Date(),
  });
  return {
    selectedSubreddit,
    posts: post.get('items'),
    isFetching: post.get('isFetching'),
    lastUpdated: post.get('lastUpdated')
  };
};

export default createSelector(
  selectedSubredditSelector,
  postsBySubredditSelector,
  (selectedSubreddit, postsBySubreddit) => selectPosts(selectedSubreddit, postsBySubreddit)
);
