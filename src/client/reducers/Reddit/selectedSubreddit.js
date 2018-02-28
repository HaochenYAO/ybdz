import { SELECT_SUBREDDIT } from '../../actions/reddit/redditAction';

export default function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}
