import { createSelector } from 'reselect';

const selectedSubredditSelector = state => state.selectedSubreddit;
const postsBySubredditSelector = state => state.postsBySubreddit;
const selectPosts = (selectedSubreddit, postsBySubreddit) => {
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
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
