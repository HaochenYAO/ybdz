import { createSelector } from 'reselect';

const selectedSubredditSelector = state => state.get('reddit').get('selectedSubreddit');
const postsBySubredditSelector = state => state.get('reddit').get('postsBySubreddit');
const selectPosts = (selectedSubreddit, postsBySubreddit) => {
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit.get(selectedSubreddit) || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default createSelector(
  selectedSubredditSelector,
  postsBySubredditSelector,
  (selectedSubreddit, postsBySubreddit) => selectPosts(selectedSubreddit, postsBySubreddit)
);
