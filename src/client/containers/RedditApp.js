import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import { List, Map } from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions/reddit/redditAction';
import Picker from '../components/common/Picker';
import Posts from '../components/reddit/Posts';
import selector from '../selectors/redditSelector';
import Nav from '../components/common/Nav';

@connect(selector)
@autobind
export default class extends Component {
  static defaultProps = Map({
    selectedSubreddit: '',
    posts: List(),
    isFetching: false,
    dispatch: () => {},
    lastUpdated: new Date()
  })
  static propTypes = {
    selectedSubreddit: PropTypes.string,
    posts: ImmutablePropTypes.listOf(ImmutablePropTypes.contains({
      title: PropTypes.string
    })),
    isFetching: PropTypes.bool,
    lastUpdated: PropTypes.instanceOf(Date),
    dispatch: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps;
      dispatch(fetchPostsIfNeeded(selectedSubreddit));
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchPostsIfNeeded(selectedSubreddit));
  }

  render() {
    const {
      selectedSubreddit,
      posts,
      isFetching,
      lastUpdated
    } = this.props;

    return (
      <div>
        <Nav active="reddit" />
        <Picker
          value={selectedSubreddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {lastUpdated.toLocaleTimeString()}.
              {' '}
            </span>
          }
          {!isFetching &&
            <a
              href="#"
              onClick={this.handleRefreshClick}
            >
              Refresh
            </a>
          }
        </p>
        {isFetching && posts.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && posts.length === 0 &&
          <h2>Empty.</h2>
        }
        {posts.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts posts={posts} />
          </div>
        }
      </div>
    );
  }
}
